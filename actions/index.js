"use server";

import { headers } from "next/headers";

const sendOtpEmail = async (formData) => {
  console.log("clicked on register");
  const email = formData.get("email");

  try {
    const role = formData.get("role");
    const password = formData.get("password");
    const name = formData.get("name");
    const mobile = formData.get("mobile");
    const countryCode = formData.get("countryCode");
    const shopName = formData.get("shopName");

    const requestHeaders = await headers();
    const host = requestHeaders.get("host");
    const protocol = requestHeaders.get("x-forwarded-proto") || "http";
    const origin = process.env.BASE_URL || `${protocol}://${host}`;

    const response = await fetch(`${origin}/api/auth/send-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        role,
        name,
        mobile,
        countryCode,
        shopName,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      // If OTP was already generated recently, user can continue to verify screen.
      if (result?.error === "OTP already sent to your email") {
        return {
          success: true,
          email,
        };
      }

      console.error("API Error Send OTP:", result.error || result);
      return {
        success: false,
        error: result?.error || "Failed to send OTP",
      };
    }

    return {
      success: true,
      email,
    };
  } catch (error) {
    console.log("Server Action Error:", error);
    return {
      success: false,
      error: "Server action failed",
    };
  }
};

// const registrationAction = async (formData) => {
//   const email = formData.get("email");
//   const otp = formData.get("otp");

//   try {
//     const createUser = await fetch("/api/auth/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, otp }),
//     });
//     const result = await createUser.json();
//     return result;
//   } catch (error) {
//     console.log(error);
//   }
// };

export { sendOtpEmail };
