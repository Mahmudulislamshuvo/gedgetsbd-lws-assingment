import React from "react";

const OrderSuccess = () => {
  return (
    <div class="max-w-[800px] mx-auto w-full p-8 py-12">
      <div class="flex items-start gap-4 p-6 border border-gray-300 rounded shadow-sm">
        <div class="bg-white border border-green-600 rounded-full p-1 self-start mt-1">
          <i data-lucide="check" class="w-6 h-6 text-green-600 stroke-[3]"></i>
        </div>
        <div class="space-y-4 flex-1">
          <h1 class="text-xl font-bold text-green-700">
            Order placed, thank you!
          </h1>
          <p class="text-sm">Confirmation will be sent to your email.</p>

          <div class="flex flex-col sm:flex-row gap-4 pt-2">
            <div class="flex-1 text-sm bg-gray-50 p-4 border border-gray-200 rounded">
              <span class="font-bold block mb-1">Shipping to John Doe</span>
              <p class="text-gray-600">
                123 Main St, Apartment 4B
                <br />
                Dhaka, 1212
              </p>
            </div>
            <div class="flex-1 text-sm bg-gray-50 p-4 border border-gray-200 rounded">
              <span class="font-bold block mb-1">Order Number</span>
              <p class="text-gray-600 font-mono">#GB-2025-001234</p>
              <p class="text-xs text-gray-500 mt-2">Placed on Jan 20, 2025</p>
            </div>
          </div>

          <div class="pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-4 items-center">
            <button class="w-full sm:w-auto px-8 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 shadow-xs transition-colors text-center flex items-center justify-center gap-2">
              <i data-lucide="download" class="w-4 h-4"></i>
              Download Invoice
            </button>
            <a
              href="bookings.html"
              class="w-full sm:w-auto px-8 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 shadow-xs transition-colors text-center"
            >
              View All Orders
            </a>
            <a
              href="index.html"
              class="w-full sm:w-auto px-8 py-2 bg-amazon-yellow hover:bg-amazon-yellow_hover border border-amazon-secondary rounded-md text-sm font-bold shadow-xs transition-colors text-center"
            >
              Continue Shopping
            </a>
          </div>
        </div>
      </div>

      {/* <!-- Success Order Info --> */}
      <div class="mt-12 space-y-6">
        <h2 class="text-2xl font-normal border-b border-gray-200 pb-4">
          Order Details
        </h2>

        {/* <!-- Product 1 --> */}
        <div class="flex gap-4 items-start">
          <img
            src="https://images.unsplash.com/photo-1675868374786-3edd36dddf04?w=200"
            class="w-20 h-20 object-cover border border-gray-200 rounded"
            alt="Item"
          />
          <div>
            <a
              href="details.html"
              class="text-amazon-blue hover:underline font-bold text-sm"
            >
              Apple MacBook Pro 16" M2 Max - 32GB RAM, 1TB SSD
            </a>
            <p class="text-xs text-gray-500 mt-1">Quantity: 1</p>
            <p class="text-xs text-amazon-orange font-bold mt-1">৳3,45,000</p>
          </div>
        </div>

        {/* <!-- Product 2 --> */}
        <div class="flex gap-4 items-start pt-4 border-t border-gray-100">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200"
            class="w-20 h-20 object-cover border border-gray-200 rounded"
            alt="Item"
          />
          <div>
            <a
              href="details.html"
              class="text-amazon-blue hover:underline font-bold text-sm"
            >
              Sony WH-1000XM5 Wireless Noise Canceling Headphones
            </a>
            <p class="text-xs text-gray-500 mt-1">Quantity: 1</p>
            <p class="text-xs text-amazon-orange font-bold mt-1">৳38,500</p>
          </div>
        </div>

        {/* <!-- Product 3 --> */}
        <div class="flex gap-4 items-start pt-4 border-t border-gray-100">
          <img
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=200"
            class="w-20 h-20 object-cover border border-gray-200 rounded"
            alt="Item"
          />
          <div>
            <a
              href="details.html"
              class="text-amazon-blue hover:underline font-bold text-sm"
            >
              Razer BlackWidow V4 Pro Mechanical Gaming Keyboard
            </a>
            <p class="text-xs text-gray-500 mt-1">Quantity: 1</p>
            <p class="text-xs text-amazon-orange font-bold mt-1">৳18,500</p>
          </div>
        </div>

        {/* <!-- Order Summary --> */}
        <div class="pt-4 border-t border-gray-200">
          <div class="max-w-sm ml-auto space-y-2 text-sm">
            <div class="flex justify-between">
              <span>Subtotal:</span>
              <span>৳4,02,000</span>
            </div>
            <div class="flex justify-between">
              <span>Delivery Fee:</span>
              <span class="text-green-600 font-bold">FREE</span>
            </div>
            <div class="flex justify-between border-b border-gray-200 pb-2">
              <span>Service Fee:</span>
              <span>৳500</span>
            </div>
            <div class="flex justify-between text-lg font-bold text-amazon-orange">
              <span>Total:</span>
              <span>৳4,02,500</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
