import sendOtpTemplate from "@/components/otps/SendOtp";
import nodemailer from "nodemailer";

// const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendOTP = async (userEmail, otp) => {
  const mailOptions = {
    from: "E-commerce Team",
    to: userEmail,
    subject: "আপনার ভেরিফিকেশন কোড",
    html: sendOtpTemplate(otp),
  };

  await transporter.sendMail(mailOptions);
};

export { sendOTP };
