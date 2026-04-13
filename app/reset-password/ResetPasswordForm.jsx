"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token") || "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    const formData = new FormData(e.currentTarget);
    const password = String(formData.get("password") || "");
    const confirmPassword = String(formData.get("confirmPassword") || "");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.message || "Failed to reset password");
        return;
      }

      setMessage("Password reset successful. Redirecting to login...");
      setTimeout(() => {
        router.push("/login");
      }, 1200);
    } catch {
      setError("Failed to reset password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="a-box p-6 w-full max-w-md space-y-4"
      onSubmit={handleSubmit}
    >
      <h1 className="text-2xl font-semibold">Reset password</h1>
      <input
        name="password"
        type="password"
        required
        placeholder="New password"
        className="w-full px-3 py-2 border border-gray-300 rounded-sm"
      />
      <input
        name="confirmPassword"
        type="password"
        required
        placeholder="Confirm new password"
        className="w-full px-3 py-2 border border-gray-300 rounded-sm"
      />
      <button
        disabled={loading || !token}
        type="submit"
        className="w-full py-2 bg-yellow-400 rounded-sm font-medium disabled:bg-gray-200"
      >
        {loading ? "Updating..." : "Reset password"}
      </button>
      {message ? <p className="text-sm text-green-700">{message}</p> : null}
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </form>
  );
}
