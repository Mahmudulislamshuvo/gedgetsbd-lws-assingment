"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const nextPath = searchParams.get("next");
      const hasSafeNextPath =
        nextPath && nextPath.startsWith("/") && !nextPath.startsWith("//");

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("your email or password is incorrect");
        return;
      }

      if (hasSafeNextPath) {
        router.push(nextPath);
        router.refresh();
        return;
      }

      const sessionResponse = await fetch("/api/auth/session");
      const session = await sessionResponse.json();
      const fallbackPath =
        session?.user?.userType === "shopOwner" ? "/managelist" : "/profile";

      router.push(fallbackPath);
      router.refresh();
    } catch {
      setError("There was an error logging in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // <form action={submitLoginForm} className="space-y-4">
    <form onSubmit={handleLoginSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-bold mb-1">
          Email or mobile phone number
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-2 py-1.5 border border-gray-400 rounded-sm outline-none focus:ring-1 focus:ring-amazon-secondary focus:border-amazon-secondary"
        />
      </div>

      <div>
        <div className="flex justify-between mb-1">
          <label htmlFor="password" className="text-sm font-bold">
            Password
          </label>
          <Link
            href="/forgot-password"
            className="text-sm text-amazon-blue hover:text-amazon-orange hover:underline"
          >
            Forgot your password?
          </Link>
        </div>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="w-full px-2 py-1.5 border border-gray-400 rounded-sm outline-none focus:ring-1 focus:ring-amazon-secondary focus:border-amazon-secondary"
        />
      </div>

      <button
        type="submit"
        className="w-full py-1.5 a-button-primary text-sm font-medium rounded-sm cursor-pointer"
        disabled={isLoading}
      >
        {isLoading ? "Signing in..." : "Sign in"}
      </button>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </form>
  );
};

export default LoginForm;
