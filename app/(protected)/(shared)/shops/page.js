import ShopCard from "@/components/shops/ShopCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const ShopsPage = () => {
  return (
    <div className="max-w-375 mx-auto w-full p-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Featured Shops & Storefronts</h1>
        <p className="text-sm text-gray-600">
          Discover trusted tech shops delivering premium gadgets across
          Bangladesh.
        </p>
      </div>

      {/* <!-- Shops Grid --> */}
      <ShopCard />

      {/* <!-- Pagination --> */}
      <div className="flex items-center justify-center gap-2 mt-8">
        <button
          className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled
        >
          <ChevronLeft classNameName="w-4 h-4" />
        </button>
        <button className="px-4 py-2 bg-amazon-yellow border border-amazon-secondary rounded-md text-sm font-bold">
          1
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
          2
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
          3
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
          4
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
          <ChevronRight classNameName="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ShopsPage;
