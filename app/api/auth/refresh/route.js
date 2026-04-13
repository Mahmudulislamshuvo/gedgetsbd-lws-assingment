import { NextResponse } from "next/server";
import crypto from "crypto";
import { dbConnect } from "@/lib/dbConnect";
import User from "@/Models/userSchema";
import {
  generateAccessToken,
  generateRefreshToken,
  getAccessTokenExpiry,
  getRefreshTokenExpiry,
  verifyRefreshToken,
} from "@/lib/tokenUtils";

function hashToken(token) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

export async function POST(request) {
  const refreshToken = request.cookies.get("refreshToken")?.value || "";
  const refreshPayload = verifyRefreshToken(refreshToken);

  if (!refreshPayload?.sub) {
    return NextResponse.json(
      { error: "Invalid or expired refresh token" },
      { status: 401 },
    );
  }

  await dbConnect();
  const user = await User.findById(refreshPayload.sub);
  if (!user || !user.refreshToken || !user.refreshTokenExpires) {
    return NextResponse.json(
      { error: "Invalid refresh token" },
      { status: 401 },
    );
  }

  const incomingHash = hashToken(refreshToken);
  const isExpired = user.refreshTokenExpires.getTime() < Date.now();
  if (incomingHash !== user.refreshToken || isExpired) {
    return NextResponse.json(
      { error: "Refresh token expired" },
      { status: 401 },
    );
  }

  const nextAccessToken = generateAccessToken(user._id, user.userType);
  const nextRefreshToken = generateRefreshToken(user._id);
  const nextRefreshTokenExpires = new Date(getRefreshTokenExpiry());

  user.refreshToken = hashToken(nextRefreshToken);
  user.refreshTokenExpires = nextRefreshTokenExpires;
  await user.save();

  const response = NextResponse.json(
    {
      success: true,
      accessToken: nextAccessToken,
      refreshToken: nextRefreshToken,
      accessTokenExpires: getAccessTokenExpiry(),
      refreshTokenExpires: nextRefreshTokenExpires.getTime(),
    },
    { status: 200 },
  );

  response.cookies.set("refreshToken", nextRefreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  });

  return response;
}
