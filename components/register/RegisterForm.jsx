"use client";

import { Info } from "lucide-react";
import { useState } from "react";

const RegisterForm = () => {
  const [isShopOwner, setIsShopOwner] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <form action="login.html" method="GET" className="space-y-4">
        {/* <!-- Account Type Toggle --> */}
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
            name="userType"
            id="userType"
            value={isShopOwner ? "shopOwner" : "customer"}
          />
        </div>

        <div>
          <label htmlFor="name" className="block text-sm font-bold mb-1">
            Your name
          </label>
          <input
            type="text"
            id="name"
            required
            placeholder="First and last name"
            className="w-full px-2 py-1.5 border border-gray-400 rounded-sm outline-none focus:ring-1 focus:ring-amazon-secondary focus:border-amazon-secondary"
          />
        </div>

        {/* <!-- Shop Name (Only for Shop Owner) --> */}
        {isShopOwner && (
          <div id="shopNameField" className="">
            <label htmlFor="shopName" className="block text-sm font-bold mb-1">
              Shop name
            </label>
            <input
              type="text"
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
            <select className="px-2 py-1.5 border border-gray-400 rounded-sm outline-none focus:ring-1 focus:ring-amazon-secondary focus:border-amazon-secondary">
              <option>BD +880</option>
            </select>
            <input
              type="tel"
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
            id="password"
            required
            placeholder="At least 6 characters"
            className="w-full px-2 py-1.5 border border-gray-400 rounded-sm outline-none focus:ring-1 focus:ring-amazon-secondary focus:border-amazon-secondary"
          />
          <p className="text-xs text-gray-600 mt-1">
            <Info className="w-3 h-3 inline mr-1" />
            Passwords must be at least 6 characters.
          </p>
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
            id="passwordConfirm"
            required
            className="w-full px-2 py-1.5 border border-gray-400 rounded-sm outline-none focus:ring-1 focus:ring-amazon-secondary focus:border-amazon-secondary"
          />
        </div>

        <button
          type="submit"
          className="w-full py-1.5 a-button-primary text-sm font-medium rounded-sm cursor-pointer"
        >
          Create your Gadgets BD account
        </button>
      </form>

      {/* <!-- Shop Owner Info --> */}
      {isShopOwner && (
        <div
          id="shopOwnerInfo"
          className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-sm"
        >
          <div className="flex gap-2">
            <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div className="text-xs text-blue-900">
              <p className="font-bold mb-1">Shop Owner Registration</p>
              <p>
                After registration, you'll be able to set up your shop profile,
                add products, and start selling on Gadgets BD marketplace.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
