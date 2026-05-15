"use client";

import { removeSingleItemFromCart } from "@/actions";

const DeleteBtn = ({ item }) => {
  const handleRemoveFromCard = async () => {
    const deleteCartItem = await removeSingleItemFromCart(item._id);
    if (deleteCartItem.success === true) {
      console.log("done");
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
