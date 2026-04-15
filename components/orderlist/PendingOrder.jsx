import React from "react";

const PendingOrder = () => {
  return (
    <>
      <div class="border border-gray-300 rounded-lg overflow-hidden">
        {/* <!-- Order Header --> */}
        <div class="bg-gray-100 p-4 flex flex-wrap justify-between items-center text-xs text-gray-600 border-b border-gray-300">
          <div class="flex gap-10">
            <div>
              <div class="uppercase tracking-tighter">Order Placed</div>
              <div class="font-normal text-sm text-gray-900 mt-1">
                January 15, 2025
              </div>
            </div>
            <div>
              <div class="uppercase tracking-tighter">Total</div>
              <div class="font-normal text-sm text-gray-900 mt-1">৳18,500</div>
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
              Order # GB-2025-001233
            </div>
            <a href="#" class="text-amazon-blue hover:underline">
              View order details
            </a>
          </div>
        </div>

        {/* <!-- Order Body --> */}
        <div class="p-6">
          <div class="flex gap-4">
            <img
              src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=200"
              class="w-32 h-32 object-cover border border-gray-200 rounded"
            />
            <div class="flex-1">
              <a
                href="details.html"
                class="text-amazon-blue hover:underline font-bold text-sm"
              >
                Razer BlackWidow V4 Pro Mechanical Gaming Keyboard
              </a>
              <p class="text-xs text-gray-600 mt-1">Sold by: Razer Store</p>
              <p class="text-xs text-gray-600 mt-1">Quantity: 1</p>
              <div class="mt-2">
                <span class="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                  <i data-lucide="truck" class="w-3 h-3 inline mr-1"></i>
                  Shipped
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
                <button class="px-4 py-1.5 border border-red-300 bg-red-50 text-red-700 rounded-md text-xs hover:bg-red-100 flex items-center gap-1">
                  <i data-lucide="x-circle" class="w-3 h-3"></i>
                  Cancel Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingOrder;
