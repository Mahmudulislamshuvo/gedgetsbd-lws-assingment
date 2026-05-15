const ShippingAddress = () => {
  return (
    <div class="hover:bg-gray-50 border-b border-gray-300 pb-6 flex justify-between items-start transition-colors cursor-pointer">
      <div>
        <span class="section-number mr-4">1</span>
        <span class="font-bold text-lg">Shipping address</span>
      </div>
      <div class="text-sm flex-1 ml-10">
        <p>John Doe</p>
        <p>123 Main St, Apartment 4B</p>
        <p>Dhaka, 1212</p>
        <p>Bangladesh</p>
        <p class="mt-1 text-gray-600">Phone: +880 1712-345678</p>
      </div>
      <a
        href="#"
        class="text-amazon-blue text-xs hover:underline hover:text-amazon-orange"
      >
        Change
      </a>
    </div>
  );
};

export default ShippingAddress;
