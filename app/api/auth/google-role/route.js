import { NextResponse } from "next/server";

export async function POST(request) {
  const { userType } = await request.json();
  const normalized = userType === "shopOwner" ? "shopOwner" : "customer";

  const response = NextResponse.json({ success: true });
  response.cookies.set("google_signup_type", normalized, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 10 * 60,
    path: "/",
  });

  return response;
}
