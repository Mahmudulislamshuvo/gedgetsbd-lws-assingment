"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterForm = () => {
  const [isShopOwner, setIsShopOwner] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      const password = formData.get("password")?.toString() || "";
      const passwordConfirm = formData.get("passwordConfirm")?.toString() || "";

      if (password !== passwordConfirm) {
        setSubmitError("Password and confirm password do not match.");
        return;
      }

      const payload = {
        email: formData.get("email")?.toString() || "",
        password,
        role: formData.get("role")?.toString() || "user",
        name: formData.get("name")?.toString() || "",
        mobile: formData.get("mobile")?.toString() || "",
        countryCode: formData.get("countryCode")?.toString() || "",
        shopName: formData.get("shopName")?.toString() || "",
      };

      if (!payload.email || !payload.password) {
        setSubmitError("Email and password are required.");
        return;
      }

      sessionStorage.setItem("pending_registration", JSON.stringify(payload));
      router.push(
        `/register/verify?email=${encodeURIComponent(payload.email)}`,
      );
    } catch (error) {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Account Type Toggle */}
        <div className="flex gap-2 mb-4 bg-gray-100 p-1 rounded-sm">
          <button
            type="button"
            className={`flex-1 py-1 text-xs font-bold shadow-sm rounded-sm ${!isShopOwner ? "bg-white text-black" : "text-gray-500"}`}
            onClick={() => setIsShopOwner(false)}
          >
            Customer
          </button>
          <button
            type="button"
            className={`flex-1 py-1 text-xs font-bold rounded-sm ${isShopOwner ? "bg-white text-black shadow-sm" : "text-gray-500"}`}
            onClick={() => setIsShopOwner(true)}
          >
            Shop Owner
          </button>

          <input
            type="hidden"
            name="role"
            value={isShopOwner ? "shopOwner" : "user"}
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-bold mb-1">
            Your name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="First and last name"
            className="w-full px-2 py-1.5 border border-gray-400 rounded-sm outline-none focus:ring-1 focus:ring-amazon-secondary focus:border-amazon-secondary"
          />
        </div>

        {isShopOwner && (
          <div id="shopNameField">
            <label htmlFor="shopName" className="block text-sm font-bold mb-1">
              Shop name
            </label>
            <input
              type="text"
              name="shopName"
              id="shopName"
              placeholder="Your shop name"
              className="w-full px-2 py-1.5 border border-gray-400 rounded-sm outline-none focus:ring-1 focus:ring-amazon-secondary focus:border-amazon-secondary"
            />
          </div>
        )}

        <div>
          <label htmlFor="mobile" className="block text-sm font-bold mb-1">
            Mobile number
          </label>
          <div className="flex gap-2">
            <select
              name="countryCode"
              className="px-2 py-1.5 border border-gray-400 rounded-sm outline-none focus:ring-1 focus:ring-amazon-secondary focus:border-amazon-secondary"
            >
              <option value="+880">BD +880</option>
            </select>
            <input
              type="tel"
              name="mobile"
              id="mobile"
              required
              placeholder="Mobile number"
              className="flex-1 px-2 py-1.5 border border-gray-400 rounded-sm outline-none focus:ring-1 focus:ring-amazon-secondary focus:border-amazon-secondary"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-2 py-1.5 border border-gray-400 rounded-sm outline-none focus:ring-1 focus:ring-amazon-secondary focus:border-amazon-secondary"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-bold mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            placeholder="At least 6 characters"
            className="w-full px-2 py-1.5 border border-gray-400 rounded-sm outline-none focus:ring-1 focus:ring-amazon-secondary focus:border-amazon-secondary"
          />
        </div>

        <div>
          <label
            htmlFor="passwordConfirm"
            className="block text-sm font-bold mb-1"
          >
            Re-enter password
          </label>
          <input
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            required
            className="w-full px-2 py-1.5 border border-gray-400 rounded-sm outline-none focus:ring-1 focus:ring-amazon-secondary focus:border-amazon-secondary"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-1.5 bg-yellow-400 hover:bg-yellow-500 text-sm font-medium rounded-sm cursor-pointer"
        >
          {isSubmitting ? "Submitting..." : "Create your Gadgets BD account"}
        </button>

        {submitError ? (
          <p className="text-sm text-red-600" role="alert">
            {submitError}
          </p>
        ) : null}
      </form>
    </div>
  );
};

export default RegisterForm;
