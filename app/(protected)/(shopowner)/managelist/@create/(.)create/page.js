"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ProductForm from "@/components/managelist/ProductForm";

const CreateProductModal = () => {
  const router = useRouter();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4 sm:p-6 backdrop-blur-sm">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={() => router.back()}></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl z-10 animate-in fade-in zoom-in duration-200">
        {/* Close Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-6 right-6 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-red-500 w-8 h-8 rounded-full flex items-center justify-center transition-colors z-20 shadow-sm"
          title="Close modal"
        >
          ✕
        </button>

        {/* Load the common ProductForm component */}
        <ProductForm onClose={() => router.back()} />
      </div>
    </div>
  );
};

export default CreateProductModal;
