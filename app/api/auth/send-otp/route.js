import bcript from "bcrypt";
import { dbConnect } from "@/lib/dbConnect";
import { encryption } from "@/lib/encription";
import Otp from "@/Models/otpSchema";
import { sendOTP } from "@/lib/nodemailer";
import User from "@/Models/userSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const otpCodeGen = Math.floor(100000 + Math.random() * 900000).toString();
    await dbConnect();
    const { email, password, role } = await request.json();

    if (!email || !password) {
      return new NextResponse(
        JSON.stringify({ error: "Email and password are required" }),
        { status: 400 },
      );
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return new NextResponse(
        JSON.stringify({
          error: "User Already Registered",
        }),
        { status: 400 },
      );
    }

    const existingOtp = await Otp.findOne({ email });

    if (existingOtp) {
      return new NextResponse(
        JSON.stringify({
          error: "OTP already sent to your email",
        }),
        { status: 400 },
      );
    }

    const passwordProtection = encryption(password);
    const hashPassword = await bcript.hash(passwordProtection, 5);

    const createTemporaryUser = new Otp({
      email,
      code: otpCodeGen,
      password: hashPassword,
      role: role,
    });

    const sendingOtp = await sendOTP(email, otpCodeGen);
    const savedUserInfoIntoOtp = await createTemporaryUser.save();

    if (!savedUserInfoIntoOtp && !sendingOtp) {
      return NextResponse.json(
        { error: "Failed to process request" },
        { status: 400 },
      );
    }
    //
    return new NextResponse(
      JSON.stringify({ message: "OTP sent to your email" }),
      { status: 200 },
    );

    //
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
