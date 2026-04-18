import React from "react";

const PopularCategory = () => {
  return (
    <a
      href="products.html"
      className="bg-white p-4 text-center hover:shadow-md transition-shadow border border-gray-200 rounded"
    >
      <div className="h-32 flex items-center justify-center mb-2">
        <img
          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200"
          className="h-full object-cover"
          alt="Laptops"
        />
      </div>
      <h3 className="font-medium text-sm">Laptops</h3>
    </a>
  );
};

export default PopularCategory;
