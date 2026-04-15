import React from "react";

const OrderHistry = () => {
  return (
    <>
      <div class="border border-gray-300 rounded-lg overflow-hidden">
        {/* <!-- Order Header --> */}
        <div class="bg-gray-100 p-4 flex flex-wrap justify-between items-center text-xs text-gray-600 border-b border-gray-300">
          <div class="flex gap-10">
            <div>
              <div class="uppercase tracking-tighter">Order Placed</div>
              <div class="font-normal text-sm text-gray-900 mt-1">
                January 20, 2025
              </div>
            </div>
            <div>
              <div class="uppercase tracking-tighter">Total</div>
              <div class="font-normal text-sm text-gray-900 mt-1">
                ৳4,02,500
              </div>
            </div>
            <div>
              <div class="uppercase tracking-tighter">Ship to</div>
              <div class="font-normal text-sm text-amazon-blue mt-1 hover:underline cursor-pointer">
                John Doe
              </div>
            </div>
          </div>
          <div class="text-right">
            <div class="uppercase tracking-tighter mb-1">
              Order # GB-2025-001234
            </div>
            <a href="#" class="text-amazon-blue hover:underline">
              View order details
            </a>
          </div>
        </div>

        {/* <!-- Order Body --> */}
        <div class="p-6 space-y-6">
          {/* <!-- Product 1 --> */}
          <div class="flex gap-4">
            <img
              src="https://images.unsplash.com/photo-1675868374786-3edd36dddf04?w=200"
              class="w-32 h-32 object-cover border border-gray-200 rounded"
            />
            <div class="flex-1">
              <a
                href="details.html"
                class="text-amazon-blue hover:underline font-bold text-sm"
              >
                Apple MacBook Pro 16" M2 Max - 32GB RAM, 1TB SSD
              </a>
              <p class="text-xs text-gray-600 mt-1">
                Sold by: Official Apple Store
              </p>
              <p class="text-xs text-gray-600 mt-1">Quantity: 1</p>
              <div class="mt-2">
                <span class="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                  <i data-lucide="check-circle" class="w-3 h-3 inline mr-1"></i>
                  Delivered
                </span>
              </div>
              <div class="flex gap-2 mt-4">
                <button
                  onclick="window.print()"
                  class="px-4 py-1.5 border border-gray-300 rounded-md text-xs hover:bg-gray-50 flex items-center gap-1"
                >
                  <i data-lucide="download" class="w-3 h-3"></i>
                  Download Invoice
                </button>
                <button class="px-4 py-1.5 border border-gray-300 rounded-md text-xs hover:bg-gray-50">
                  Write a Review
                </button>
                <button class="px-4 py-1.5 border border-gray-300 rounded-md text-xs hover:bg-gray-50">
                  Buy it again
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Product 2 --> */}
          <div class="flex gap-4 pt-6 border-t border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200"
              class="w-32 h-32 object-cover border border-gray-200 rounded"
            />
            <div class="flex-1">
              <a
                href="details.html"
                class="text-amazon-blue hover:underline font-bold text-sm"
              >
                Sony WH-1000XM5 Wireless Noise Canceling Headphones
              </a>
              <p class="text-xs text-gray-600 mt-1">Sold by: Sony Official</p>
              <p class="text-xs text-gray-600 mt-1">Quantity: 1</p>
              <div class="mt-2">
                <span class="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                  <i data-lucide="check-circle" class="w-3 h-3 inline mr-1"></i>
                  Delivered
                </span>
              </div>
              <div class="flex gap-2 mt-4">
                <button
                  onclick="window.print()"
                  class="px-4 py-1.5 border border-gray-300 rounded-md text-xs hover:bg-gray-50 flex items-center gap-1"
                >
                  <i data-lucide="download" class="w-3 h-3"></i>
                  Download Invoice
                </button>
                <button class="px-4 py-1.5 border border-gray-300 rounded-md text-xs hover:bg-gray-50">
                  Write a Review
                </button>
                <button class="px-4 py-1.5 border border-gray-300 rounded-md text-xs hover:bg-gray-50">
                  Buy it again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistry;
