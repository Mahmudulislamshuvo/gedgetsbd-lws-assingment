"use client";

import { deleteSingleProduct } from "@/actions";
import Modal from "@/components/common/Modal";
import { Trash2 } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";

const ProductDeleteModal = () => {
  const { id } = useParams();

  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const result = await deleteSingleProduct(id);

      if (result.success === true) {
        router.back();
      } else {
        console.error("Deletion failed:", result.error);
      }
    } catch (error) {
      console.error("Deletion failed:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Modal>
      <div className="text-center p-4">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30 mb-6">
          <Trash2 className="h-10 w-10 text-red-600" />
        </div>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Are you sure?
        </h2>

        <p className="text-base text-gray-600 dark:text-gray-300 mb-8 max-w-sm mx-auto">
          You are about to permanently delete this product.
          {id ? (
            <span className="block mt-2 text-sm text-gray-700 dark:text-gray-200">
              ID: <span className="font-mono">{id}</span>
            </span>
          ) : null}
          <span className="block mt-2">This action cannot be undone.</span>
        </p>

        <div className="flex gap-4 justify-center pt-2">
          <button
            type="button"
            onClick={() => router.back()}
            disabled={isDeleting}
            className="flex-1 justify-center rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
          >
            No, Cancel
          </button>

          <button
            type="button"
            onClick={handleDelete}
            disabled={isDeleting}
            className="flex-1 justify-center rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:bg-red-400"
          >
            {isDeleting ? "Deleting..." : "Yes, Delete It"}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductDeleteModal;
