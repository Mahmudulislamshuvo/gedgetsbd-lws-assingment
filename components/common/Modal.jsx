"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Modal = ({ children, title }) => {
  const router = useRouter();

  // মডাল ক্লোজ করার ফাংশন
  const handleClose = () => {
    router.back();
  };

  useEffect(() => {
    // Escape (ESC) বাটন প্রেস করলে মডাল ক্লোজ হবে
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    // মডাল ওপেন হলে ব্যাকগ্রাউন্ড স্ক্রল লক করা
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 transition-all"
      onClick={handleClose} // ব্যাকগ্রাউন্ডে ক্লিক করলে router.back() কল হবে
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all dark:bg-gray-800 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()} // মডালের ভেতরে ক্লিক করলে যেন ক্লোজ না হয়
      >
        {/* Header Section */}
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            {title && title}
          </h3>

          {/* Top-Right Cross Button */}
          <button
            onClick={handleClose}
            className="rounded-full bg-gray-100 p-2 text-gray-500 transition-colors hover:bg-red-100 hover:text-red-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-red-500/20 dark:hover:text-red-400"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content Section (Children) */}
        <div className="overflow-y-auto px-6 py-4 custom-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
