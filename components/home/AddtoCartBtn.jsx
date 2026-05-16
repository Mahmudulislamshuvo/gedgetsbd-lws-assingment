"use client";

import { addTocart } from "@/actions";
import { toast } from "@/utils/toastify";

const AddtoCartBtn = ({ productId, userId }) => {
  const handleAddToCart = async (e) => {
    e.preventDefault();
    try {
      const res = await addTocart(productId, userId);
      if (res.success) {
        toast.success("Product added to cart successfully!");
      } else {
        toast.error(res.error || "Failed to add product to cart.");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while adding the product to the cart.");
    }
  };

  return (
    <button
      onClick={(e) => handleAddToCart(e)}
      className="w-full bg-amazon-yellow hover:bg-amazon-yellow_hover text-sm py-1.5 rounded-md shadow-sm font-medium border border-amazon-secondary transition-colors"
    >
      Add to Cart
    </button>
  );
};

export default AddtoCartBtn;
