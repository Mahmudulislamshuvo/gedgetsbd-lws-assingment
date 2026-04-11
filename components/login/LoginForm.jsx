"use client";

import axios from "axios";
import { useState } from "react";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await axios.post("/api/auth/login", { email, password });
      console.log("Login successful:", response.data);
      if (response?.data?.success === true) {
        if (response?.data?.user?.role === "user") {
          window.location.href = "/";
        } else {
          window.location.href = "/dashboard";
        }
      }
    } catch (error) {
      console.error("Login failed:", error);
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
          <a
            href="#"
            className="text-sm text-amazon-blue hover:text-amazon-orange hover:underline"
          >
            Forgot your password?
          </a>
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
    </form>
  );
};

export default LoginForm;
