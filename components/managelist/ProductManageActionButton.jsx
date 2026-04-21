"use client";

import Link from "next/link";
import { useFormStatus } from "react-dom";

const ProductManageActionButton = ({ onClose }) => {
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-end pt-4">
      {onClose ? (
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2 border border-gray-400 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors text-center"
        >
          Cancel
        </button>
      ) : (
        <Link
          href="/managelist"
          className="px-6 py-2 border border-gray-400 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors text-center"
        >
          Cancel
        </Link>
      )}

      <button
        type="submit"
        disabled={pending}
        className="px-6 py-2 bg-amazon-yellow hover:bg-amazon-yellow_hover border border-amazon-secondary rounded-md text-sm font-bold shadow-sm transition-colors flex items-center justify-center min-w-[160px] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {pending ? (
          <>
            {/* সুন্দর একটি লোডিং স্পিনার (Tailwind) */}
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Publishing...
          </>
        ) : (
          "Publish Product"
        )}
      </button>
    </div>
  );
};

export default ProductManageActionButton;
