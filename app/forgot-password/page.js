"use client";

import { useState } from "react";

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") || "");

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(
        data.message || "If the email exists, a reset link has been sent.",
      );
    } catch {
      setMessage("If the email exists, a reset link has been sent.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <form
        className="a-box p-6 w-full max-w-md space-y-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-semibold">Forgot password</h1>
        <p className="text-sm text-gray-600">
          Enter your account email and we will send a reset link.
        </p>
        <input
          name="email"
          type="email"
          required
          placeholder="you@example.com"
          className="w-full px-3 py-2 border border-gray-300 rounded-sm"
        />
        <button
          disabled={loading}
          type="submit"
          className="w-full py-2 bg-yellow-400 rounded-sm font-medium"
        >
          {loading ? "Sending..." : "Send reset link"}
        </button>
        {message ? <p className="text-sm text-green-700">{message}</p> : null}
      </form>
    </div>
  );
}
