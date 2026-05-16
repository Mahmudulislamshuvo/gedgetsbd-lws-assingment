"use client";

import { useEffect } from "react";
import Link from "next/link";
import { toast } from "@/utils/toastify";

const CancelPayment = ({ searchParams }) => {
  const tran_id = searchParams?.tran_id;

  useEffect(() => {
    toast.info("Payment was canceled.");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md w-full">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-amber-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v4m0 4h.01M6.938 4.938l10.124 0.001c1.79 0 2.675 2.17 1.414 3.431L7.352 19.495c-1.262 1.262-3.414.37-3.414-1.415l0.002-10.124c0-1.104.896-2.018 2-2.018z"
            ></path>
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Canceled
        </h2>
        <p className="text-gray-600 mb-6">
          You canceled the payment. You can try again anytime.
        </p>

        <div className="bg-gray-50 p-3 rounded border border-gray-200 text-sm text-gray-700 mb-6 text-left">
          <span className="font-semibold block mb-1">Transaction ID:</span>
          <span className="font-mono">{tran_id || "N/A"}</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/checkout"
            className="bg-amazon-orange text-black px-6 py-2 rounded hover:bg-yellow-500 transition-colors inline-block font-medium"
          >
            Back to Checkout
          </Link>
          <Link
            href="/"
            className="border border-gray-300 px-6 py-2 rounded hover:bg-gray-50 transition-colors inline-block font-medium"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CancelPayment;
