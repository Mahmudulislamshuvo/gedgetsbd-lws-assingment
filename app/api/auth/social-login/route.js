import { dbConnect } from "@/lib/dbConnect";
import User from "@/Models/userSchema";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

// incomplete need to complete it

export async function POST(request) {
  const randomPassword = Math.random().toString(36).slice(-8);
  try {
    await dbConnect();
    const { email, name, image, role } = await request.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });

    const user = existingUser
      ? existingUser
      : await User.create({
          email,
          name,
          image,
          role,
          password: `${randomPassword} socialLogin`,
        });

    const accessToken = jwt.sign(
      { email: user.email, role: user.role, id: user._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" },
    );

    const refreshToken = jwt.sign(
      { email: user.email, role: user.role, id: user._id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "7d" },
    );

    const cookieStore = await cookies();

    cookieStore.set("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 60,
      path: "/",
    });

    cookieStore.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60,
      path: "/",
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Social login successful",
        user: {
          email: existingUser?.email ? existingUser?.email : user?.email,
          role: existingUser?.role ? existingUser?.role : user?.role,
        },
      }),
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ error: "Social login failed" }, { status: 500 });
  }
}
