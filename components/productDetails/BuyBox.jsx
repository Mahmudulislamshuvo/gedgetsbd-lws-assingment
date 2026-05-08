import { Package, ShieldCheck, Truck } from "lucide-react";
import React from "react";

const BuyBox = () => {
  return (
    <div class="lg:col-span-3">
      <div class="border border-gray-200 rounded p-4">
        <div class="text-3xl text-amazon-orange mb-2">৳3,45,000</div>
        <p class="text-sm mb-3">
          <span class="font-bold">FREE delivery</span>
          <strong>Tomorrow</strong>
        </p>
        <p class="text-green-600 font-bold text-sm mb-4">In Stock</p>

        <div class="mb-4">
          <label class="text-sm font-bold block mb-2">Quantity:</label>
          <select class="border border-gray-300 rounded px-3 py-1 text-sm w-20">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <button class="w-full bg-amazon-yellow hover:bg-amazon-yellow_hover py-2 rounded-md shadow-sm mb-2 text-sm font-medium border border-amazon-secondary">
          Add to Cart
        </button>
        <button class="w-full bg-amazon-secondary hover:bg-amazon-secondary_hover py-2 rounded-md shadow-sm text-sm font-medium text-white">
          Buy Now
        </button>

        <div class="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-600">
          <p class="mb-1">
            <ShieldCheck class="w-4 h-4 inline mr-1" />
            Secure transaction
          </p>
          <p class="mb-1">
            <Truck class="w-4 h-4 inline mr-1" />
            Ships from Gadgets BD
          </p>
          <p>
            <Package class="w-4 h-4 inline mr-1" />
            Sold by Official Apple Store
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyBox;
