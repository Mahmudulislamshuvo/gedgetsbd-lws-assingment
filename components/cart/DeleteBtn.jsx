"use client";

import { removeSingleItemFromCart } from "@/actions";
import { toast } from "@/utils/toastify";

const DeleteBtn = ({ item }) => {
  const handleRemoveFromCard = async () => {
    try {
      const deleteCartItem = await removeSingleItemFromCart(item._id);
      if (deleteCartItem.success === true) {
        toast.success("Item removed from cart.");
      } else {
        toast.error(deleteCartItem.error || "Failed to remove item.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to remove item.");
    }
  };

  return (
    <button
      onClick={() => handleRemoveFromCard()}
      className="text-sm text-amazon-blue hover:text-amazon-orange hover:underline"
    >
      Delete
    </button>
  );
};

export default DeleteBtn;
