"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import ProductForm from "@/components/managelist/ProductForm";

const CreateProductModalClient = ({ shopId }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isModalRoute = pathname.startsWith("/managelist/create");

  useEffect(() => {
    if (!isModalRoute) {
      document.body.style.overflow = "auto";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalRoute]);

  if (!isModalRoute) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4 sm:p-6 backdrop-blur-sm">
      <div
        className="absolute inset-0"
        onClick={() => router.replace("/managelist")}
      ></div>

      <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl z-10 animate-in fade-in zoom-in duration-200">
        <button
          onClick={() => router.replace("/managelist")}
          className="absolute top-6 right-6 bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-red-500 w-8 h-8 rounded-full flex items-center justify-center transition-colors z-20 shadow-sm"
          title="Close modal"
        >
          ✕
        </button>

        <ProductForm
          shopId={shopId}
          onClose={() => router.replace("/managelist")}
        />
      </div>
    </div>
  );
};

export default CreateProductModalClient;
