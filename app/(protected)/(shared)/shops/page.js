import React from "react";

const ShopsPage = () => {
  return (
    <div class="max-w-[1500px] mx-auto w-full p-4 py-8">
      <div class="mb-6">
        <h1 class="text-2xl font-bold">Featured Shops & Storefronts</h1>
        <p class="text-sm text-gray-600">
          Discover trusted tech shops delivering premium gadgets across
          Bangladesh.
        </p>
      </div>

      {/* <!-- Shops Grid --> */}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* <!-- Shop Card 1 --> */}
        <div class="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
          <div class="h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600"
              class="w-full h-full object-cover"
              alt="Shop"
            />
          </div>
          <div class="p-4 flex-1 flex flex-col">
            <div class="flex justify-between items-start mb-2">
              <div>
                <h3 class="font-bold text-lg text-amazon-blue hover:text-amazon-orange hover:underline cursor-pointer">
                  Tech Hub BD
                </h3>
                <p class="text-sm text-gray-500">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div class="flex items-center gap-1 mb-2">
              <div class="flex text-amazon-secondary">
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
              </div>
              <span class="text-xs text-amazon-blue">3,240 ratings</span>
            </div>

            <p class="text-sm line-clamp-3 mb-4 text-gray-700">
              Leading retailer of laptops, computers, and accessories. Official
              partner of Apple, Dell, and HP with 10+ years of experience.
            </p>

            <div class="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
              <div class="text-xs">
                <span class="text-gray-500">Specializes in:</span>
                <span class="font-bold">Laptops & PCs</span>
              </div>
              <button
                onclick="window.location.href = 'products.html'"
                class="bg-amazon-yellow hover:bg-amazon-yellow_hover px-4 py-1.5 rounded-full text-xs font-bold shadow-sm transition-colors"
              >
                Visit Shop
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Shop Card 2 --> */}
        <div class="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
          <div class="h-48 overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100">
            <img
              src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600"
              class="w-full h-full object-cover"
              alt="Shop"
            />
          </div>
          <div class="p-4 flex-1 flex flex-col">
            <div class="flex justify-between items-start mb-2">
              <div>
                <h3 class="font-bold text-lg text-amazon-blue hover:text-amazon-orange hover:underline cursor-pointer">
                  Mobile World
                </h3>
                <p class="text-sm text-gray-500">Chittagong, Bangladesh</p>
              </div>
            </div>

            <div class="flex items-center gap-1 mb-2">
              <div class="flex text-amazon-secondary">
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star-half" class="w-4 h-4 fill-current"></i>
              </div>
              <span class="text-xs text-amazon-blue">2,856 ratings</span>
            </div>

            <p class="text-sm line-clamp-3 mb-4 text-gray-700">
              Authorized dealer of Samsung, Apple, and Xiaomi smartphones.
              Offering genuine products with official warranty and after-sales
              service.
            </p>

            <div class="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
              <div class="text-xs">
                <span class="text-gray-500">Specializes in:</span>
                <span class="font-bold">Smartphones</span>
              </div>
              <button
                onclick="window.location.href = 'products.html'"
                class="bg-amazon-yellow hover:bg-amazon-yellow_hover px-4 py-1.5 rounded-full text-xs font-bold shadow-sm transition-colors"
              >
                Visit Shop
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Shop Card 3 --> */}
        <div class="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
          <div class="h-48 overflow-hidden bg-gradient-to-br from-red-50 to-red-100">
            <img
              src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600"
              class="w-full h-full object-cover"
              alt="Shop"
            />
          </div>
          <div class="p-4 flex-1 flex flex-col">
            <div class="flex justify-between items-start mb-2">
              <div>
                <h3 class="font-bold text-lg text-amazon-blue hover:text-amazon-orange hover:underline cursor-pointer">
                  Gaming Zone BD
                </h3>
                <p class="text-sm text-gray-500">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div class="flex items-center gap-1 mb-2">
              <div class="flex text-amazon-secondary">
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
              </div>
              <span class="text-xs text-amazon-blue">4,105 ratings</span>
            </div>

            <p class="text-sm line-clamp-3 mb-4 text-gray-700">
              Premium gaming peripherals and accessories. Exclusive partner of
              Razer, Logitech G, and Corsair with expert gaming setup
              consultation.
            </p>

            <div class="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
              <div class="text-xs">
                <span class="text-gray-500">Specializes in:</span>
                <span class="font-bold">Gaming Gear</span>
              </div>
              <button
                onclick="window.location.href = 'products.html'"
                class="bg-amazon-yellow hover:bg-amazon-yellow_hover px-4 py-1.5 rounded-full text-xs font-bold shadow-sm transition-colors"
              >
                Visit Shop
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Shop Card 4 --> */}
        <div class="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
          <div class="h-48 overflow-hidden bg-gradient-to-br from-green-50 to-green-100">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
              class="w-full h-full object-cover"
              alt="Shop"
            />
          </div>
          <div class="p-4 flex-1 flex flex-col">
            <div class="flex justify-between items-start mb-2">
              <div>
                <h3 class="font-bold text-lg text-amazon-blue hover:text-amazon-orange hover:underline cursor-pointer">
                  Audio Haven
                </h3>
                <p class="text-sm text-gray-500">Sylhet, Bangladesh</p>
              </div>
            </div>

            <div class="flex items-center gap-1 mb-2">
              <div class="flex text-amazon-secondary">
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4"></i>
              </div>
              <span class="text-xs text-amazon-blue">1,567 ratings</span>
            </div>

            <p class="text-sm line-clamp-3 mb-4 text-gray-700">
              Specialist in premium audio equipment. Authorized retailer of
              Sony, Bose, and JBL with professional audio consultation services.
            </p>

            <div class="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
              <div class="text-xs">
                <span class="text-gray-500">Specializes in:</span>
                <span class="font-bold">Audio & Headphones</span>
              </div>
              <button
                onclick="window.location.href = 'products.html'"
                class="bg-amazon-yellow hover:bg-amazon-yellow_hover px-4 py-1.5 rounded-full text-xs font-bold shadow-sm transition-colors"
              >
                Visit Shop
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Shop Card 5 --> */}
        <div class="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
          <div class="h-48 overflow-hidden bg-gradient-to-br from-yellow-50 to-yellow-100">
            <img
              src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600"
              class="w-full h-full object-cover"
              alt="Shop"
            />
          </div>
          <div class="p-4 flex-1 flex flex-col">
            <div class="flex justify-between items-start mb-2">
              <div>
                <h3 class="font-bold text-lg text-amazon-blue hover:text-amazon-orange hover:underline cursor-pointer">
                  Camera Corner
                </h3>
                <p class="text-sm text-gray-500">Rajshahi, Bangladesh</p>
              </div>
            </div>

            <div class="flex items-center gap-1 mb-2">
              <div class="flex text-amazon-secondary">
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star-half" class="w-4 h-4 fill-current"></i>
              </div>
              <span class="text-xs text-amazon-blue">987 ratings</span>
            </div>

            <p class="text-sm line-clamp-3 mb-4 text-gray-700">
              Professional photography equipment and accessories. Canon, Nikon,
              and Sony authorized dealer with expert photography guidance.
            </p>

            <div class="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
              <div class="text-xs">
                <span class="text-gray-500">Specializes in:</span>
                <span class="font-bold">Cameras & Lenses</span>
              </div>
              <button
                onclick="window.location.href = 'products.html'"
                class="bg-amazon-yellow hover:bg-amazon-yellow_hover px-4 py-1.5 rounded-full text-xs font-bold shadow-sm transition-colors"
              >
                Visit Shop
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Shop Card 6 --> */}
        <div class="bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
          <div class="h-48 overflow-hidden bg-gradient-to-br from-indigo-50 to-indigo-100">
            <img
              src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=600"
              class="w-full h-full object-cover"
              alt="Shop"
            />
          </div>
          <div class="p-4 flex-1 flex flex-col">
            <div class="flex justify-between items-start mb-2">
              <div>
                <h3 class="font-bold text-lg text-amazon-blue hover:text-amazon-orange hover:underline cursor-pointer">
                  Smart Watch Pro
                </h3>
                <p class="text-sm text-gray-500">Dhaka, Bangladesh</p>
              </div>
            </div>

            <div class="flex items-center gap-1 mb-2">
              <div class="flex text-amazon-secondary">
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
                <i data-lucide="star" class="w-4 h-4 fill-current"></i>
              </div>
              <span class="text-xs text-amazon-blue">2,345 ratings</span>
            </div>

            <p class="text-sm line-clamp-3 mb-4 text-gray-700">
              Leading retailer of smartwatches and wearables. Official partner
              of Apple Watch, Samsung Galaxy Watch, and Fitbit with health
              tracking expertise.
            </p>

            <div class="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
              <div class="text-xs">
                <span class="text-gray-500">Specializes in:</span>
                <span class="font-bold">Wearables</span>
              </div>
              <button
                onclick="window.location.href = 'products.html'"
                class="bg-amazon-yellow hover:bg-amazon-yellow_hover px-4 py-1.5 rounded-full text-xs font-bold shadow-sm transition-colors"
              >
                Visit Shop
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Pagination --> */}
      <div class="flex items-center justify-center gap-2 mt-8">
        <button
          class="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled
        >
          <i data-lucide="chevron-left" class="w-4 h-4"></i>
        </button>
        <button class="px-4 py-2 bg-amazon-yellow border border-amazon-secondary rounded-md text-sm font-bold">
          1
        </button>
        <button class="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
          2
        </button>
        <button class="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
          3
        </button>
        <button class="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
          4
        </button>
        <button class="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
          <i data-lucide="chevron-right" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  );
};

export default ShopsPage;
