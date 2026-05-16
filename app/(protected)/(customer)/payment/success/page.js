"use client";

import React, { use, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "@/utils/toastify";

const SuccessPayment = ({ searchParams }) => {
  const router = useRouter();
  const resolvedParams = use(searchParams);
  const tran_id = resolvedParams?.tran_id;

  useEffect(() => {
    toast.success("Payment successful! Redirecting to home...");
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        =
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mb-6">Thank you for your purchase.</p>
        {/* ট্রানজেকশন আইডি দেখানো হচ্ছে */}
        <div className="bg-gray-50 p-3 rounded border border-gray-200 text-sm text-gray-700 mb-6 text-left">
          <span className="font-semibold block mb-1">Transaction ID:</span>
          <span className="font-mono">{tran_id || "N/A"}</span>
        </div>
        <Link
          href="/"
          className="bg-amazon-orange text-black px-6 py-2 rounded hover:bg-yellow-500 transition-colors inline-block font-medium"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessPayment;
