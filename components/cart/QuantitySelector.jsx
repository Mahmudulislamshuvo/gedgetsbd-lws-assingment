"use client";

import { useState, useTransition } from "react";
import { updateCartQuantity } from "@/actions";

const QuantitySelector = ({ productId, initialQuantity = 1 }) => {
  const [quantity, setQuantity] = useState(initialQuantity || 1);
  const [isPending, startTransition] = useTransition();

  const handleQuantityChange = (e) => {
    const nextQuantity = Number(e.target.value);
    setQuantity(nextQuantity);

    startTransition(async () => {
      await updateCartQuantity(productId, nextQuantity);
    });
  };

  return (
    <div className="flex items-center gap-2">
      <label className="text-xs text-gray-600">Qty:</label>
      <select
        value={quantity}
        onChange={handleQuantityChange}
        disabled={isPending}
        className="border border-gray-400 rounded-md px-2 py-1 text-sm bg-gray-50 outline-none focus:ring-1 focus:ring-amazon-blue"
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
    </div>
  );
};

export default QuantitySelector;
