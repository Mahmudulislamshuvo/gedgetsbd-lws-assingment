import { dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import User from "@/Models/userSchema";
import Shop from "@/Models/shopSchema";

const registerSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  userType: z.enum(["customer", "shopOwner"]),
  shopName: z.string().optional(),
});

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const parsed = registerSchema.safeParse(body);

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

    const { name, email, password, userType, shopName } = parsed.data;
    const normalizedEmail = email.toLowerCase();

    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "User already exists" },
        { status: 409 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      name,
      email: normalizedEmail,
      password: hashedPassword,
      userType,
    });

    if (userType === "shopOwner") {
      const shop = await Shop.create({
        name: shopName || `${name}'s Shop`,
        ownerId: user._id,
      });
      user.shopId = shop._id;
      await user.save();
    }

    return NextResponse.json(
      {
        success: true,
        message: "Registration successful",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          userType: user.userType,
          shopId: user.shopId,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to complete registration" },
      { status: 500 },
    );
  }
}
