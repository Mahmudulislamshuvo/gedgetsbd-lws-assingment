import User from "@/Models/userSchema";
import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Otp from "@/Models/otpSchema";

export async function POST(request) {
  try {
    await dbConnect();
    const { email, otp } = await request.json();
    const findUser = await Otp.findOne({ email });

    if (!findUser) {
      return new NextResponse(
        JSON.stringify({ error: "OTP expired or invalid" }),
        { status: 400 },
      );
    }

    if (findUser.code !== otp) {
      return new NextResponse(JSON.stringify({ error: "Invalid OTP" }), {
        status: 400,
      });
    }

    const createUser = await User.create({
      email: findUser.email,
      password: findUser.password,
      name: findUser.name,
      role: findUser.role,
    });

    if (createUser) {
      return NextResponse.json({
        success: true,
        message: "Registration successful",
      });
    }
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Failed to complete registration", error }),
      { status: 500 },
    );
  }
}
