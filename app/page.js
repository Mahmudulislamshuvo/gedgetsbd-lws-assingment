import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="flex-1 max-w-375 mx-auto w-full">
        {/* <!-- Hero Banner --> */}
        <div
          className="relative w-full h-64 md:h-80 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1491933382434-500287f9b54b?q=80&w=2574&auto=format&fit=crop")`,
          }}
        >
          <div className="absolute inset-0 bg-linear-to-t from-amazon-background to-transparent"></div>
        </div>

        {/* <!-- Categories & Content Grid --> */}
        <div className="relative z-10 -mt-32 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* <!-- Card 1 --> */}
            <div className="bg-white p-4 flex flex-col gap-4 shadow-sm z-20">
              <h2 className="text-xl font-bold">Laptops & PCs</h2>
              <div className="grid grid-cols-2 gap-2 h-full">
                <img
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300"
                  className="w-full h-full object-cover mb-1"
                />
                <img
                  src="https://images.unsplash.com/photo-1675868374786-3edd36dddf04?w=300"
                  className="w-full h-full object-cover mb-1"
                />
                <img
                  src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300"
                  className="w-full h-full object-cover mb-1"
                />
                <img
                  src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=300"
                  className="w-full h-full object-cover mb-1"
                />
              </div>
              <a
                href="products.html"
                className="text-amazon-blue text-sm hover:underline hover:text-red-700 mt-auto"
              >
                See all laptops
              </a>
            </div>

            {/* <!-- Card 2 --> */}
            <div className="bg-white p-4 flex flex-col gap-4 shadow-sm z-20">
              <h2 className="text-xl font-bold">Smartphones</h2>
              <div className="w-full h-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500"
                  className="w-full h-full object-cover"
                />
              </div>
              <a
                href="products.html"
                className="text-amazon-blue text-sm hover:underline hover:text-red-700 mt-auto"
              >
                Shop smartphones
              </a>
            </div>

            {/* <!-- Card 3 --> */}
            <div className="bg-white p-4 flex flex-col gap-4 shadow-sm z-20">
              <h2 className="text-xl font-bold">Accessories</h2>
              <div className="w-full h-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
                  className="w-full h-full object-cover"
                />
              </div>
              <a
                href="products.html"
                className="text-amazon-blue text-sm hover:underline hover:text-red-700 mt-auto"
              >
                Shop accessories
              </a>
            </div>

            {/* <!-- Card 4 (Sign in promo) --> */}
            <div className="bg-white p-4 flex flex-col gap-4 shadow-sm z-20 justify-between">
              <div className="shrink-0">
                <h2 className="text-xl font-bold">
                  Sign in for the best tech deals
                </h2>
                <button className="bg-amazon-yellow w-full py-2 rounded-md shadow-sm mt-4 text-sm hover:bg-amazon-yellow_hover">
                  Sign in securely
                </button>
              </div>
              <div className="mt-4 grow h-full">
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* <!-- Featured Product Carousel (Horizontal Scroll) --> */}
          <div className="mt-8 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-bold">Featured Products</h2>
              <a
                href="products.html"
                className="text-amazon-blue text-sm hover:underline hover:text-red-700"
              >
                View All
              </a>
            </div>

            <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
              {/* <!-- Product 1 --> */}
              <div className="flex-none w-48">
                <a href="details.html">
                  <div className="bg-gray-50 h-48 flex items-center justify-center mb-2 p-2">
                    <img
                      src="https://images.unsplash.com/photo-1675868374786-3edd36dddf04?w=300"
                      className="h-full object-cover mix-blend-multiply"
                    />
                  </div>
                  <div className="text-sm hover:text-amazon-orange text-amazon-blue line-clamp-2">
                    Apple MacBook Pro M2, 16GB RAM, 512GB SSD
                  </div>
                </a>
                <div className="text-xs text-gray-500">
                  Official Apple Store
                </div>
                <div className="mt-1">
                  <span className="text-xs align-top">৳</span>
                  <span className="text-xl font-bold">1,85,000</span>
                </div>
                <div className="text-xs text-gray-500 mb-2">
                  Get it by Tomorrow
                </div>
                <button className="w-full bg-amazon-yellow hover:bg-amazon-yellow_hover text-sm py-1.5 rounded-md shadow-sm font-medium border border-amazon-secondary transition-colors">
                  Add to Cart
                </button>
              </div>

              {/* <!-- Product 2 --> */}
              <div className="flex-none w-48">
                <a href="details.html">
                  <div className="bg-gray-50 h-48 flex items-center justify-center mb-2 p-2">
                    <img
                      src="https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=300"
                      className="h-full object-cover mix-blend-multiply"
                    />
                  </div>
                  <div className="text-sm hover:text-amazon-orange text-amazon-blue line-clamp-2">
                    iPhone 15 Pro Max - Blue Titanium
                  </div>
                </a>
                <div className="text-xs text-gray-500">Apple Bangladesh</div>
                <div className="mt-1">
                  <span className="text-xs align-top">৳</span>
                  <span className="text-xl font-bold">1,45,000</span>
                </div>
                <div className="text-xs text-gray-500 mb-2">
                  Get it by Tomorrow
                </div>
                <button className="w-full bg-amazon-yellow hover:bg-amazon-yellow_hover text-sm py-1.5 rounded-md shadow-sm font-medium border border-amazon-secondary transition-colors">
                  Add to Cart
                </button>
              </div>

              {/* <!-- Product 3 --> */}
              <div className="flex-none w-48">
                <a href="details.html">
                  <div className="bg-gray-50 h-48 flex items-center justify-center mb-2 p-2">
                    <img
                      src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300"
                      className="h-full object-cover mix-blend-multiply"
                    />
                  </div>
                  <div className="text-sm hover:text-amazon-orange text-amazon-blue line-clamp-2">
                    Sony WH-1000XM5 Noise Canceling Headphones
                  </div>
                </a>
                <div className="text-xs text-gray-500">Sony Official</div>
                <div className="mt-1">
                  <span className="text-xs align-top">৳</span>
                  <span className="text-xl font-bold">32,500</span>
                </div>
                <div className="text-xs text-gray-500 mb-2">
                  Get it by Tomorrow
                </div>
                <button className="w-full bg-amazon-yellow hover:bg-amazon-yellow_hover text-sm py-1.5 rounded-md shadow-sm font-medium border border-amazon-secondary transition-colors">
                  Add to Cart
                </button>
              </div>

              {/* <!-- Product 4 --> */}
              <div className="flex-none w-48">
                <a href="details.html">
                  <div className="bg-gray-50 h-48 flex items-center justify-center mb-2 p-2">
                    <img
                      src="https://images.unsplash.com/photo-1675868374786-3edd36dddf04?w=300"
                      className="h-full object-cover mix-blend-multiply"
                    />
                  </div>
                  <div className="text-sm hover:text-amazon-orange text-amazon-blue line-clamp-2">
                    Mechanical Gaming Keyboard RGB
                  </div>
                </a>
                <div className="text-xs text-gray-500">Razer Store</div>
                <div className="mt-1">
                  <span className="text-xs align-top">৳</span>
                  <span className="text-xl font-bold">8,500</span>
                </div>
                <div className="text-xs text-gray-500 mb-2">
                  Get it by Tomorrow
                </div>
                <button className="w-full bg-amazon-yellow hover:bg-amazon-yellow_hover text-sm py-1.5 rounded-md shadow-sm font-medium border border-amazon-secondary transition-colors">
                  Add to Cart
                </button>
              </div>

              {/* <!-- Product 5 --> */}
              <div className="flex-none w-48">
                <a href="details.html">
                  <div className="bg-gray-50 h-48 flex items-center justify-center mb-2 p-2">
                    <img
                      src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300"
                      className="h-full object-cover mix-blend-multiply"
                    />
                  </div>
                  <div className="text-sm hover:text-amazon-orange text-amazon-blue line-clamp-2">
                    Logitech G502 Hero Gaming Mouse
                  </div>
                </a>
                <div className="text-xs text-gray-500">Logitech G</div>
                <div className="mt-1">
                  <span className="text-xs align-top">৳</span>
                  <span className="text-xl font-bold">4,500</span>
                </div>
                <div className="text-xs text-gray-500 mb-2">
                  Get it by Tomorrow
                </div>
                <button className="w-full bg-amazon-yellow hover:bg-amazon-yellow_hover text-sm py-1.5 rounded-md shadow-sm font-medium border border-amazon-secondary transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Why Shop With Us Section --> */}
        <div className="bg-white py-12 mt-8">
          <div className="max-w-375 mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">
              Why Shop with Gadgets BD?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-amazon-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <i data-lucide="truck" className="w-8 h-8 text-amazon"></i>
                </div>
                <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
                <p className="text-sm text-gray-600">
                  Get your gadgets delivered within 24-48 hours across
                  Bangladesh
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-amazon-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <i
                    data-lucide="shield-check"
                    className="w-8 h-8 text-amazon"
                  ></i>
                </div>
                <h3 className="font-bold text-lg mb-2">100% Authentic</h3>
                <p className="text-sm text-gray-600">
                  All products are genuine with official warranty and
                  certifications
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-amazon-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <i
                    data-lucide="headphones"
                    className="w-8 h-8 text-amazon"
                  ></i>
                </div>
                <h3 className="font-bold text-lg mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">
                  Our customer service team is always ready to help you
                </p>
              </div>
              <div className="text-center p-4">
                <div className="w-16 h-16 bg-amazon-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <i
                    data-lucide="credit-card"
                    className="w-8 h-8 text-amazon"
                  ></i>
                </div>
                <h3 className="font-bold text-lg mb-2">Secure Payment</h3>
                <p className="text-sm text-gray-600">
                  Multiple payment options with 100% secure transactions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Popular Categories Section --> */}
        <div className="max-w-375 mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <a
              href="products.html"
              className="bg-white p-4 text-center hover:shadow-md transition-shadow border border-gray-200 rounded"
            >
              <div className="h-32 flex items-center justify-center mb-2">
                <img
                  src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200"
                  className="h-full object-cover"
                  alt="Laptops"
                />
              </div>
              <h3 className="font-medium text-sm">Laptops</h3>
            </a>
            <a
              href="products.html"
              className="bg-white p-4 text-center hover:shadow-md transition-shadow border border-gray-200 rounded"
            >
              <div className="h-32 flex items-center justify-center mb-2">
                <img
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200"
                  className="h-full object-cover"
                  alt="Smartphones"
                />
              </div>
              <h3 className="font-medium text-sm">Smartphones</h3>
            </a>
            <a
              href="products.html"
              className="bg-white p-4 text-center hover:shadow-md transition-shadow border border-gray-200 rounded"
            >
              <div className="h-32 flex items-center justify-center mb-2">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200"
                  className="h-full object-cover"
                  alt="Headphones"
                />
              </div>
              <h3 className="font-medium text-sm">Audio</h3>
            </a>
            <a
              href="products.html"
              className="bg-white p-4 text-center hover:shadow-md transition-shadow border border-gray-200 rounded"
            >
              <div className="h-32 flex items-center justify-center mb-2">
                <img
                  src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=200"
                  className="h-full object-cover"
                  alt="Gaming"
                />
              </div>
              <h3 className="font-medium text-sm">Gaming</h3>
            </a>
            <a
              href="products.html"
              className="bg-white p-4 text-center hover:shadow-md transition-shadow border border-gray-200 rounded"
            >
              <div className="h-32 flex items-center justify-center mb-2">
                <img
                  src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=200"
                  className="h-full object-cover"
                  alt="Cameras"
                />
              </div>
              <h3 className="font-medium text-sm">Cameras</h3>
            </a>
            <a
              href="products.html"
              className="bg-white p-4 text-center hover:shadow-md transition-shadow border border-gray-200 rounded"
            >
              <div className="h-32 flex items-center justify-center mb-2">
                <img
                  src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=200"
                  className="h-full object-cover"
                  alt="Wearables"
                />
              </div>
              <h3 className="font-medium text-sm">Wearables</h3>
            </a>
          </div>
        </div>

        {/* <!-- Shop by Brand Section --> */}
        <div className="bg-white py-8 mt-8">
          <div className="max-w-375 mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Shop by Brand</h2>
            <div className="flex gap-6 overflow-x-auto pb-4">
              <div className="flex-none w-32 h-32 bg-gray-50 border border-gray-200 rounded flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer">
                <span className="text-2xl font-bold text-gray-400">Apple</span>
              </div>
              <div className="flex-none w-32 h-32 bg-gray-50 border border-gray-200 rounded flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer">
                <span className="text-2xl font-bold text-gray-400">
                  Samsung
                </span>
              </div>
              <div className="flex-none w-32 h-32 bg-gray-50 border border-gray-200 rounded flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer">
                <span className="text-2xl font-bold text-gray-400">Dell</span>
              </div>
              <div className="flex-none w-32 h-32 bg-gray-50 border border-gray-200 rounded flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer">
                <span className="text-2xl font-bold text-gray-400">HP</span>
              </div>
              <div className="flex-none w-32 h-32 bg-gray-50 border border-gray-200 rounded flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer">
                <span className="text-2xl font-bold text-gray-400">Lenovo</span>
              </div>
              <div className="flex-none w-32 h-32 bg-gray-50 border border-gray-200 rounded flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer">
                <span className="text-2xl font-bold text-gray-400">Sony</span>
              </div>
              <div className="flex-none w-32 h-32 bg-gray-50 border border-gray-200 rounded flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer">
                <span className="text-2xl font-bold text-gray-400">Razer</span>
              </div>
              <div className="flex-none w-32 h-32 bg-gray-50 border border-gray-200 rounded flex items-center justify-center hover:shadow-md transition-shadow cursor-pointer">
                <span className="text-2xl font-bold text-gray-400">
                  Logitech
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
