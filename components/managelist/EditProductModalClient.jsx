"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import ProductForm from "@/components/managelist/ProductForm";

const EditProductModalClient = ({ shopId, product }) => {
  const router = useRouter();
  const pathname = usePathname();
  const isModalRoute = pathname.startsWith("/managelist/edit/");

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
          X
        </button>

        {product ? (
          <ProductForm
            shopId={shopId}
            product={product}
            onClose={() => router.replace("/managelist")}
          />
        ) : (
          <div className="p-6">
            <h2 className="text-lg font-semibold">Product not found</h2>
            <p className="text-sm text-gray-600 mt-2">
              The product you are trying to edit does not exist or was removed.
            </p>
            <button
              onClick={() => router.replace("/managelist")}
              className="mt-6 px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
            >
              Back to Manage List
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditProductModalClient;
