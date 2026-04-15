const OrderHistry = () => {
  return (
    <>
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        {/* <!-- Order Header --> */}
        <div className="bg-gray-100 p-4 flex flex-wrap justify-between items-center text-xs text-gray-600 border-b border-gray-300">
          <div className="flex gap-10">
            <div>
              <div className="uppercase tracking-tighter">Order Placed</div>
              <div className="font-normal text-sm text-gray-900 mt-1">
                January 20, 2025
              </div>
            </div>
            <div>
              <div className="uppercase tracking-tighter">Total</div>
              <div className="font-normal text-sm text-gray-900 mt-1">
                ৳4,02,500
              </div>
            </div>
            <div>
              <div className="uppercase tracking-tighter">Ship to</div>
              <div className="font-normal text-sm text-amazon-blue mt-1 hover:underline cursor-pointer">
                John Doe
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="uppercase tracking-tighter mb-1">
              Order # GB-2025-001234
            </div>
            <a href="#" className="text-amazon-blue hover:underline">
              View order details
            </a>
          </div>
        </div>

        {/* <!-- Order Body --> */}
        <div className="p-6 space-y-6">
          {/* <!-- Product 1 --> */}
          <div className="flex gap-4">
            <img
              src="https://images.unsplash.com/photo-1675868374786-3edd36dddf04?w=200"
              className="w-32 h-32 object-cover border border-gray-200 rounded"
            />
            <div className="flex-1">
              <a
                href="details.html"
                className="text-amazon-blue hover:underline font-bold text-sm"
              >
                Apple MacBook Pro 16" M2 Max - 32GB RAM, 1TB SSD
              </a>
              <p className="text-xs text-gray-600 mt-1">
                Sold by: Official Apple Store
              </p>
              <p className="text-xs text-gray-600 mt-1">Quantity: 1</p>
              <div className="mt-2">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                  <i
                    data-lucide="check-circle"
                    className="w-3 h-3 inline mr-1"
                  ></i>
                  Delivered
                </span>
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  onclick="window.print()"
                  className="px-4 py-1.5 border border-gray-300 rounded-md text-xs hover:bg-gray-50 flex items-center gap-1"
                >
                  <i data-lucide="download" className="w-3 h-3"></i>
                  Download Invoice
                </button>
                <button className="px-4 py-1.5 border border-gray-300 rounded-md text-xs hover:bg-gray-50">
                  Write a Review
                </button>
                <button className="px-4 py-1.5 border border-gray-300 rounded-md text-xs hover:bg-gray-50">
                  Buy it again
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Product 2 --> */}
          <div className="flex gap-4 pt-6 border-t border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200"
              className="w-32 h-32 object-cover border border-gray-200 rounded"
            />
            <div className="flex-1">
              <a
                href="details.html"
                className="text-amazon-blue hover:underline font-bold text-sm"
              >
                Sony WH-1000XM5 Wireless Noise Canceling Headphones
              </a>
              <p className="text-xs text-gray-600 mt-1">
                Sold by: Sony Official
              </p>
              <p className="text-xs text-gray-600 mt-1">Quantity: 1</p>
              <div className="mt-2">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                  <i
                    data-lucide="check-circle"
                    className="w-3 h-3 inline mr-1"
                  ></i>
                  Delivered
                </span>
              </div>
              <div className="flex gap-2 mt-4">
                <button
                  onclick="window.print()"
                  className="px-4 py-1.5 border border-gray-300 rounded-md text-xs hover:bg-gray-50 flex items-center gap-1"
                >
                  <i data-lucide="download" className="w-3 h-3"></i>
                  Download Invoice
                </button>
                <button className="px-4 py-1.5 border border-gray-300 rounded-md text-xs hover:bg-gray-50">
                  Write a Review
                </button>
                <button className="px-4 py-1.5 border border-gray-300 rounded-md text-xs hover:bg-gray-50">
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
