import crypto from "crypto";
import { NextResponse } from "next/server";
import { z } from "zod";
import { dbConnect } from "@/lib/dbConnect";
import User from "@/Models/userSchema";
import { sendEmail } from "@/lib/nodemailer";
import { passwordResetTemplate } from "@/lib/mailTemplates";

const forgotSchema = z.object({
  email: z.string().email(),
});

export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const parsed = forgotSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: true,
          message: "If the email exists, a reset link has been sent.",
        },
        { status: 200 },
      );
    }

    const email = parsed.data.email.toLowerCase();
    const user = await User.findOne({ email });

    if (user) {
      const rawToken = crypto.randomBytes(32).toString("hex");
      const hashedToken = crypto
        .createHash("sha256")
        .update(rawToken)
        .digest("hex");

      user.resetPasswordToken = hashedToken;
      user.resetPasswordExpires = new Date(Date.now() + 60 * 60 * 1000);
      await user.save();

      const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
      const resetLink = `${baseUrl}/reset-password?token=${rawToken}`;

      await sendEmail({
        to: user.email,
        subject: "Reset your password",
        html: passwordResetTemplate(resetLink),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: "If the email exists, a reset link has been sent.",
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      {
        success: true,
        message: "If the email exists, a reset link has been sent.",
      },
      { status: 200 },
    );
  }
}
