"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Info, Mail, X, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const VerifyOTPModal = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Read email from query string: /register/verify?email=...
  const email = searchParams.get("email")
    ? decodeURIComponent(searchParams.get("email"))
    : "";

  const [otp, setOtp] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(true);
  const [otpSendError, setOtpSendError] = useState("");
  const [hasOtpSent, setHasOtpSent] = useState(false);

  const sendOtpFromPendingRegistration = async (forceResend = false) => {
    if (!email) {
      setIsSendingOtp(false);
      setOtpSendError("Email not found in URL.");
      return;
    }

    const sentKey = `otp_sent_${email}`;
    const alreadySent = sessionStorage.getItem(sentKey);

    if (alreadySent && !forceResend) {
      setHasOtpSent(true);
      setIsSendingOtp(false);
      return;
    }

    const pendingRaw = sessionStorage.getItem("pending_registration");

    if (!pendingRaw) {
      setIsSendingOtp(false);
      setOtpSendError("Registration session not found. Please register again.");
      return;
    }

    try {
      setIsSendingOtp(true);
      setOtpSendError("");

      const payload = JSON.parse(pendingRaw);

      if (!payload?.email || payload.email !== email) {
        setOtpSendError("Email mismatch. Please register again.");
        return;
      }

      const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        if (result?.error === "OTP already sent to your email") {
          sessionStorage.setItem(sentKey, "1");
          setHasOtpSent(true);
          return;
        }

        setOtpSendError(result?.error || "Failed to send OTP.");
        return;
      }

      sessionStorage.setItem(sentKey, "1");
      setHasOtpSent(true);
    } catch (error) {
      setOtpSendError("Failed to send OTP. Check your connection and retry.");
    } finally {
      setIsSendingOtp(false);
    }
  };

  useEffect(() => {
    sendOtpFromPendingRegistration();
  }, [email]);

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!hasOtpSent) return;

    setIsPending(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({ email, otp }),
      });

      const result = await response.json();

      console.log(result);

      if (result.success === true) {
        sessionStorage.removeItem(`otp_sent_${email}`);
        sessionStorage.removeItem("pending_registration");
        router.push("/login");
        return;
      }

      console.log(result?.error || "OTP verification failed");
    } catch (error) {
      console.log(error);
    } finally {
      setIsPending(false);
    }
  };

  return (
    // Full-screen overlay with blur effect
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      {/* Modal Container */}
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-2xl relative animate-in fade-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="mx-auto bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 border border-blue-100">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Verify Your Email
          </h2>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            We've sent a 6-digit verification code to:
            <br />
            <span className="font-semibold text-gray-900 break-all">
              {email}
            </span>
          </p>

          <p className="text-xs mt-3 text-gray-600">
            {isSendingOtp
              ? "Sending OTP..."
              : hasOtpSent
                ? "OTP sent. Please check your email."
                : otpSendError || "OTP status unknown."}
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleVerify} className="space-y-6">
          <div className="space-y-2">
            <label
              htmlFor="otp"
              className="block text-sm font-bold text-gray-700 text-center"
            >
              Enter 6-Digit OTP
            </label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
              placeholder="000000"
              maxLength={6}
              required
              disabled={isPending}
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-lg text-center text-3xl font-mono font-bold tracking-[12px] focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 outline-none transition-all placeholder:text-gray-200 disabled:bg-gray-50 disabled:text-gray-400"
            />
            <div className="flex items-start gap-2 pt-2">
              <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
              <p className="text-[11px] text-gray-500 leading-normal">
                This code is valid for 5 minutes. Please do not share this code
                with anyone for security reasons.
              </p>
            </div>
          </div>

          <button
            type="submit"
            disabled={
              isPending || isSendingOtp || !hasOtpSent || otp.length < 6
            }
            className="w-full bg-[#FFD814] hover:bg-[#F7CA00] disabled:bg-gray-200 disabled:cursor-not-allowed py-3 rounded-lg text-sm font-bold text-gray-900 transition-all shadow-sm flex items-center justify-center gap-2"
          >
            {isPending && <Loader2 className="w-4 h-4 animate-spin" />}
            {isPending ? "Verifying..." : "Verify and Create Account"}
          </button>
        </form>

        {/* Footer Section */}
        <div className="mt-8 text-center border-t border-gray-100 pt-6">
          <p className="text-sm text-gray-600">
            Didn't receive the code?{" "}
            <button
              type="button"
              onClick={() => sendOtpFromPendingRegistration(true)}
              disabled={isSendingOtp}
              className="text-sm text-blue-600 hover:text-blue-800 font-bold hover:underline transition-all"
            >
              {isSendingOtp ? "Sending..." : "Resend OTP"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTPModal;
