"use client";

import { EyeOffIcon, PencilIcon, Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";

const ManageProcutsButtons = ({ product }) => {
  const router = useRouter();
  const productId = product?._id ? String(product._id) : "";

  const handleEdit = () => {
    if (!productId) return;
    router.push(`/managelist/edit/${productId}`);
  };

  const handleOpenDeleteModal = () => {
    if (!productId) return;
    router.push(`/managelist/delete/${productId}`);
  };

  return (
    <div className="flex items-center justify-end gap-2">
      <button
        className="p-1.5 hover:bg-gray-100 rounded"
        title="Edit"
        onClick={handleEdit}
      >
        <PencilIcon className="w-4 h-4 text-amazon-blue" />
      </button>
      <button className="p-1.5 hover:bg-gray-100 rounded" title="Unpublish">
        <EyeOffIcon className="w-4 h-4 text-gray-600" />
      </button>
      <button
        onClick={handleOpenDeleteModal}
        className="p-1.5 hover:bg-gray-100 rounded"
        title="Delete"
      >
        <Trash2Icon className="w-4 h-4 text-red-600" />
      </button>
    </div>
  );
};

export default ManageProcutsButtons;
