import bcrypt from "bcrypt";
import { dbConnect } from "@/lib/dbConnect";
import Otp from "@/Models/otpSchema";
import { sendOTP } from "@/lib/nodemailer";
import User from "@/Models/userSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const otpCodeGen = Math.floor(100000 + Math.random() * 900000).toString();
    await dbConnect();
    const { email, password, role, name } = await request.json();

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

    const hashPassword = await bcrypt.hash(password, 5);

    const upsertResult = await Otp.findOneAndUpdate(
      { email },
      {
        $setOnInsert: {
          email,
          code: otpCodeGen,
          name,
          password: hashPassword,
          role: role,
        },
      },
      {
        new: true,
        upsert: true,
        rawResult: true,
      },
    );

    const savedUserInfoIntoOtp = upsertResult?.value;
    const alreadyExisted = upsertResult?.lastErrorObject?.updatedExisting;

    if (alreadyExisted) {
      return new NextResponse(
        JSON.stringify({
          error: "OTP already sent to your email",
        }),
        { status: 400 },
      );
    }

    if (!savedUserInfoIntoOtp) {
      return NextResponse.json(
        { error: "Failed to process request" },
        { status: 400 },
      );
    }

    try {
      await sendOTP(email, otpCodeGen);
    } catch (mailError) {
      await Otp.deleteOne({ _id: savedUserInfoIntoOtp._id });
      return NextResponse.json(
        { error: "Failed to send OTP email" },
        { status: 500 },
      );
    }

    return new NextResponse(
      JSON.stringify({
        message: "OTP sent to your email",
        data: savedUserInfoIntoOtp,
      }),
      { status: 200 },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
