"use server";

import { redirect } from "next/navigation";

const sendOtpEmail = async (formData) => {
  try {
    const email = formData.get("email");
    const role = formData.get("role");
    const password = formData.get("password");

    const response = await fetch(`${process.env.BASE_URL}/api/auth/send-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, role }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("API Error Send OTP:", result.error);
      return;
    }
  } catch (error) {
    console.log("Server Action Error:", error);
    return;
  }

  const userEmail = formData.get("email");
  redirect(`/register/verify?email=${encodeURIComponent(userEmail)}`);
};

export { sendOtpEmail };
