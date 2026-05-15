const RideSideSummery = ({ userInfo }) => {
  return (
    <div class="w-full lg:w-75">
      <div class="box p-4 sticky top-10">
        <button
          onclick="document.getElementById('paymentForm').submit()"
          class="w-full py-2 mb-4 rounded-md btn-primary text-sm font-normal shadow-sm"
        >
          Place your order
        </button>
        <p class="text-[10px] text-gray-500 text-center mb-4 border-b border-gray-300 pb-4 leading-tight">
          By placing your order, you agree to Gadgets BD's
          <a
            href="#"
            class="text-amazon-blue text-xs hover:underline hover:text-amazon-orange"
          >
            privacy notice
          </a>
          and
          <a
            href="#"
            class="text-amazon-blue text-xs hover:underline hover:text-amazon-orange"
          >
            conditions of use
          </a>
          .
        </p>

        <h3 class="font-bold text-lg mb-4">Order Summary</h3>
        <div class="space-y-2 text-xs text-gray-600">
          <div class="flex justify-between">
            <span>Items (3):</span>
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
          <div class="flex justify-between text-amazon-orange text-lg font-bold pt-2">
            <span>Order Total:</span>
            <span>৳4,02,500</span>
          </div>
        </div>

        <div class="mt-4 pt-4 border-t border-gray-200 text-xs">
          <p class="text-green-600 font-bold mb-2">
            <i data-lucide="truck" class="w-4 h-4 inline mr-1"></i>
            FREE Delivery on orders over ৳50,000
          </p>
          <p class="text-gray-600">
            <i data-lucide="shield-check" class="w-4 h-4 inline mr-1"></i>
            Secure checkout
          </p>
        </div>
      </div>
    </div>
  );
};

export default RideSideSummery;
