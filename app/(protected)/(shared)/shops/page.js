import { ChevronLeft } from "lucide-react";
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* <!-- Shop Card 1 --> */}
        <div className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
          <div className="h-48 overflow-hidden bg-linear-to-br from-blue-50 to-blue-100">
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600"
              className="w-full h-full object-cover"
              alt="Shop"
            />
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg text-amazon-blue hover:text-amazon-orange hover:underline cursor-pointer">
                  Tech Hub BD
                </h3>
                <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-2">
              <div className="flex text-amazon-secondary">
                <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                <i data-lucide="star" className="w-4 h-4 fill-current"></i>
              </div>
              <span className="text-xs text-amazon-blue">3,240 ratings</span>
            </div>

            <p className="text-sm line-clamp-3 mb-4 text-gray-700">
              Leading retailer of laptops, computers, and accessories. Official
              partner of Apple, Dell, and HP with 10+ years of experience.
            </p>

            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="text-xs">
                <span className="text-gray-500">Specializes in:</span>
                <span className="font-bold">Laptops & PCs</span>
              </div>
              <button
                onclick="window.location.href = 'products.html'"
                className="bg-amazon-yellow hover:bg-amazon-yellow_hover px-4 py-1.5 rounded-full text-xs font-bold shadow-sm transition-colors"
              >
                Visit Shop
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
          <div className="h-48 overflow-hidden bg-linear-to-br from-blue-50 to-blue-100">
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600"
              className="w-full h-full object-cover"
              alt="Shop"
            />
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg text-amazon-blue hover:text-amazon-orange hover:underline cursor-pointer">
                  Tech Hub BD
                </h3>
                <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-2">
              <div className="flex text-amazon-secondary">
                <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                <i data-lucide="star" className="w-4 h-4 fill-current"></i>
              </div>
              <span className="text-xs text-amazon-blue">3,240 ratings</span>
            </div>

            <p className="text-sm line-clamp-3 mb-4 text-gray-700">
              Leading retailer of laptops, computers, and accessories. Official
              partner of Apple, Dell, and HP with 10+ years of experience.
            </p>

            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="text-xs">
                <span className="text-gray-500">Specializes in:</span>
                <span className="font-bold">Laptops & PCs</span>
              </div>
              <button
                onclick="window.location.href = 'products.html'"
                className="bg-amazon-yellow hover:bg-amazon-yellow_hover px-4 py-1.5 rounded-full text-xs font-bold shadow-sm transition-colors"
              >
                Visit Shop
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
          <div className="h-48 overflow-hidden bg-linear-to-br from-blue-50 to-blue-100">
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600"
              className="w-full h-full object-cover"
              alt="Shop"
            />
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg text-amazon-blue hover:text-amazon-orange hover:underline cursor-pointer">
                  Tech Hub BD
                </h3>
                <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-2">
              <div className="flex text-amazon-secondary">
                <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                <i data-lucide="star" className="w-4 h-4 fill-current"></i>
              </div>
              <span className="text-xs text-amazon-blue">3,240 ratings</span>
            </div>

            <p className="text-sm line-clamp-3 mb-4 text-gray-700">
              Leading retailer of laptops, computers, and accessories. Official
              partner of Apple, Dell, and HP with 10+ years of experience.
            </p>

            <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="text-xs">
                <span className="text-gray-500">Specializes in:</span>
                <span className="font-bold">Laptops & PCs</span>
              </div>
              <button
                onclick="window.location.href = 'products.html'"
                className="bg-amazon-yellow hover:bg-amazon-yellow_hover px-4 py-1.5 rounded-full text-xs font-bold shadow-sm transition-colors"
              >
                Visit Shop
              </button>
            </div>
          </div>
        </div>
      </div>

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
