import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { z } from "zod";
import { dbConnect } from "@/lib/dbConnect";
import User from "@/Models/userSchema";
import {
  generateAccessToken,
  generateRefreshToken,
  getAccessTokenExpiry,
  getRefreshTokenExpiry,
} from "@/lib/tokenUtils";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

function hashToken(token) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json().catch(() => null);
    const parsed = loginSchema.safeParse(body || {});

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const { email, password } = parsed.data;
    const normalizedEmail = email.toLowerCase();

    const user = await User.findOne({ email: normalizedEmail });
    if (!user || !user.password) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 },
      );
    }

    const matched = await bcrypt.compare(password, user.password);
    if (!matched) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 },
      );
    }

    const accessToken = generateAccessToken(user._id, user.userType);
    const refreshToken = generateRefreshToken(user._id);
    const refreshTokenHash = hashToken(refreshToken);
    const refreshTokenExpires = new Date(getRefreshTokenExpiry());
    const accessTokenExpires = getAccessTokenExpiry();

    user.refreshToken = refreshTokenHash;
    user.refreshTokenExpires = refreshTokenExpires;
    await user.save();

    const response = NextResponse.json(
      {
        success: true,
        message: "Login successful",
        user: {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          userType: user.userType,
          shopId: user.shopId ? user.shopId.toString() : null,
        },
        accessToken,
        refreshToken,
        accessTokenExpires,
        refreshTokenExpires: refreshTokenExpires.getTime(),
      },
      { status: 200 },
    );

    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to login" },
      { status: 500 },
    );
  }
}
