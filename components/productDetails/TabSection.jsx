"use client";

import { useState } from "react";
import DescriptionSection from "./DescriptionSection";
import ReviewsSection from "./ReviewsSection";
import ShopInfoSection from "./ShopInfoSection";

const TabSection = ({ product, shopInfo }) => {
  const [activeTab, setActiveTab] = useState("description");

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="mt-12">
      <div className="border-b border-gray-300 mb-6">
        <div className="flex gap-8">
          <button
            className={`tab-button ${activeTab === "description" ? "text-amazon-orange border-b-2 border-amazon-orange" : "text-gray-600 hover:text-amazon-orange"} pb-2 px-1 text-sm font-medium`}
            onClick={() => switchTab("description")}
          >
            Description
          </button>
          <button
            className={`tab-button ${activeTab === "reviews" ? "text-amazon-orange border-b-2 border-amazon-orange" : "text-gray-600 hover:text-amazon-orange"} pb-2 px-1 text-sm font-medium`}
            onClick={() => switchTab("reviews")}
          >
            Reviews
          </button>
          <button
            className={`tab-button ${activeTab === "shop" ? "text-amazon-orange border-b-2 border-amazon-orange" : "text-gray-600 hover:text-amazon-orange"} pb-2 px-1 text-sm font-medium`}
            onClick={() => switchTab("shop")}
          >
            Shop Info
          </button>
        </div>
      </div>

      {activeTab === "description" && <DescriptionSection product={product} />}
      {activeTab === "reviews" && <ReviewsSection />}
      {activeTab === "shop" && <ShopInfoSection shopInfo={shopInfo} />}
    </div>
  );
};

export default TabSection;
