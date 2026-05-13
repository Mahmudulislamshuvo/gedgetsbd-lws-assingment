import { getAllShops } from "@/actions";
import { Star } from "lucide-react";
import Link from "next/link";
import React from "react";

const ShopCard = async ({ brand }) => {
  const { data: allShops } = await getAllShops(1, 10, brand);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {allShops?.length === 0 ? (
        <p className="text-center text-gray-500 col-span-full">
          No shops found for the selected brand.
        </p>
      ) : (
        allShops?.map((shop, index) => (
          <div
            key={shop?._id || index}
            className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow"
          >
            <div className="h-48 overflow-hidden bg-linear-to-br from-blue-50 to-blue-100">
              <img
                src={
                  shop?.logo ||
                  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600"
                }
                className="w-full h-full object-cover"
                alt="Shop"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-lg text-amazon-blue hover:text-amazon-orange hover:underline cursor-pointer">
                    {shop?.name}
                  </h3>
                  <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-2">
                <div className="flex text-amazon-secondary">
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-xs text-amazon-blue">3,240 ratings</span>
              </div>

              <p className="text-sm line-clamp-3 mb-4 text-gray-700">
                {shop?.description ||
                  "Leading retailer of laptops, computers, and accessories. Official partner of Apple, Dell, and HP with 10+ years of experience."}
              </p>

              <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                <div className="text-xs">
                  <span className="text-gray-500">Specializes in: </span>
                  <span className="font-bold">
                    {shop?.specialization || "Laptops & PCs"}
                  </span>
                </div>

                <Link
                  href={`/shop/${shop?._id}`}
                  className="bg-amazon-yellow hover:bg-amazon-yellow_hover px-4 py-1.5 rounded-full text-xs font-bold shadow-sm transition-colors text-center"
                >
                  Visit Shop
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ShopCard;
