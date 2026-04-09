import User from "@/Models/userSchema";
import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";

export async function POST(request) {
  try {
    const { email, password, role } = await request.json();

    await dbConnect();

    if (!email || !password) {
      return new NextResponse(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 },
      );
    }

    // If user is already registered
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return new NextResponse(
        JSON.stringify({ error: "User already registered" }),
        { status: 400 },
      );
    }

    return;

    // // Create new user
    // const createUser = new User({
    //   email,
    //   password,
    //   role: role,
    // });

    // await createUser.save();

    // return new NextResponse(
    //   JSON.stringify({ message: "User registered successfully" }),
    //   { status: 201 },
    // );
  } catch (error) {
    console.log(error);
  }
}
