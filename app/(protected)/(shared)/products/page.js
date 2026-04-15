import React from "react";

const ProductPage = () => {
  return (
    <div className="flex-1 max-w-375 mx-auto w-full p-4">
      {/* <!-- Results Header --> */}
      <div className="flex justify-between items-center mb-4 shadow-sm border-b pb-2">
        <div className="text-sm">
          <span>1-16 of over 500 results for</span>
          <span className="font-bold text-amazon-orange">"Electronics"</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Sort by:</span>
          <select className="text-sm bg-gray-100 border border-gray-300 rounded px-2 py-1 shadow-sm focus:ring-1 focus:ring-amazon-secondary focus:border-amazon-secondary">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Avg. Customer Review</option>
            <option>Newest Arrivals</option>
          </select>
        </div>
      </div>

      <div className="flex gap-6">
        {/* <!-- Sidebar Filters --> */}
        <div className="w-64 hidden lg:block shrink-0 border-r pr-4">
          {/* <!-- Category --> */}
          <div className="mb-6">
            <h3 className="font-bold text-base mb-3">Category</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                />
                <span className="text-sm">Laptops & Computers</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                />
                <span className="text-sm">Smartphones & Tablets</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                />
                <span className="text-sm">Audio & Headphones</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                />
                <span className="text-sm">Gaming Accessories</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                />
                <span className="text-sm">Cameras & Photography</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                />
                <span className="text-sm">Wearables & Smartwatches</span>
              </label>
            </div>
          </div>

          <div className="border-t pt-4 mb-6">
            <h3 className="font-bold text-base mb-3">Brand</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                />
                <span className="text-sm">Apple</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                />
                <span className="text-sm">Samsung</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                />
                <span className="text-sm">Dell</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                />
                <span className="text-sm">HP</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                />
                <span className="text-sm">Lenovo</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                />
                <span className="text-sm">Sony</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                />
                <span className="text-sm">Razer</span>
              </label>
            </div>
          </div>

          <div className="border-t pt-4 mb-6">
            <h3 className="font-bold text-base mb-3">Customer Reviews</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                />
                <div className="flex items-center gap-1">
                  <div className="flex text-amazon-secondary text-sm">
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4"></i>
                  </div>
                  <span className="text-sm">& Up</span>
                </div>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                />
                <div className="flex items-center gap-1">
                  <div className="flex text-amazon-secondary text-sm">
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4"></i>
                    <i data-lucide="star" className="w-4 h-4"></i>
                  </div>
                  <span className="text-sm">& Up</span>
                </div>
              </label>
            </div>
          </div>

          <div className="border-t pt-4 mb-6">
            <h3 className="font-bold text-base mb-3">Price</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                />
                <span className="text-sm">Under ৳10,000</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                />
                <span className="text-sm">৳10,000 - ৳25,000</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                />
                <span className="text-sm">৳25,000 - ৳50,000</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                />
                <span className="text-sm">৳50,000 - ৳1,00,000</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                />
                <span className="text-sm">Over ৳1,00,000</span>
              </label>
            </div>
          </div>

          <div className="border-t pt-4 mb-6">
            <h3 className="font-bold text-base mb-3">Availability</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                />
                <span className="text-sm">In Stock</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                />
                <span className="text-sm">Pre-Order</span>
              </label>
            </div>
          </div>

          <div className="border-t pt-4 mb-6">
            <h3 className="font-bold text-base mb-3">Condition</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                  checked
                />
                <span className="text-sm">New</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer hover:text-amazon-orange">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-300 text-amazon-secondary focus:ring-amazon-secondary"
                />
                <span className="text-sm">Renewed</span>
              </label>
            </div>
          </div>
        </div>

        {/* <!-- Product Grid --> */}
        <div className="flex-1">
          <div className="space-y-4">
            {/* <!-- Product 1 --> */}
            <a
              href="details.html"
              className="flex gap-4 p-4 border rounded hover:shadow-md transition"
            >
              <div className="w-48 h-48 shrink-0 bg-gray-50 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1675868374786-3edd36dddf04?w=300"
                  className="h-full object-cover mix-blend-multiply"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-amazon-blue hover:text-amazon-orange font-normal mb-1">
                  Apple MacBook Pro 16" M2 Max - 32GB RAM, 1TB SSD, Space Gray
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-amazon-secondary">
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                  </div>
                  <span className="text-sm text-amazon-blue">1,245</span>
                </div>
                <div className="mb-2">
                  <span className="text-2xl font-normal">৳3,45,000</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  FREE delivery <strong>Tomorrow</strong>
                </p>
                <p className="text-xs text-gray-500">
                  Apple M2 Max chip | 16-inch Liquid Retina XDR display | 1080p
                  FaceTime HD camera
                </p>
              </div>
            </a>

            {/* <!-- Product 2 --> */}
            <a
              href="details.html"
              className="flex gap-4 p-4 border rounded hover:shadow-md transition"
            >
              <div className="w-48 h-48 shrink-0 bg-gray-50 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=300"
                  className="h-full object-cover mix-blend-multiply"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-amazon-blue hover:text-amazon-orange font-normal mb-1">
                  iPhone 15 Pro Max 256GB - Blue Titanium
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-amazon-secondary">
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                  </div>
                  <span className="text-sm text-amazon-blue">2,891</span>
                </div>
                <div className="mb-2">
                  <span className="text-2xl font-normal">৳1,65,000</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  FREE delivery <strong>Tomorrow</strong>
                </p>
                <p className="text-xs text-gray-500">
                  A17 Pro chip | Titanium design | 48MP Main camera | Action
                  button
                </p>
              </div>
            </a>

            {/* <!-- Product 3 --> */}
            <a
              href="details.html"
              className="flex gap-4 p-4 border rounded hover:shadow-md transition"
            >
              <div className="w-48 h-48 shrink-0 bg-gray-50 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300"
                  className="h-full object-cover mix-blend-multiply"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-amazon-blue hover:text-amazon-orange font-normal mb-1">
                  Sony WH-1000XM5 Wireless Noise Canceling Headphones - Black
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-amazon-secondary">
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4"></i>
                  </div>
                  <span className="text-sm text-amazon-blue">5,432</span>
                </div>
                <div className="mb-2">
                  <span className="text-2xl font-normal">৳38,500</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  FREE delivery <strong>Tomorrow</strong>
                </p>
                <p className="text-xs text-gray-500">
                  Industry-leading noise canceling | 30-hour battery life |
                  Multipoint connection
                </p>
              </div>
            </a>

            {/* <!-- Product 4 --> */}
            <a
              href="details.html"
              className="flex gap-4 p-4 border rounded hover:shadow-md transition"
            >
              <div className="w-48 h-48 shrink-0 bg-gray-50 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=300"
                  className="h-full object-cover mix-blend-multiply"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-amazon-blue hover:text-amazon-orange font-normal mb-1">
                  Dell XPS 15 Laptop - Intel i7 13th Gen, 16GB RAM, 512GB SSD
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-amazon-secondary">
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4"></i>
                  </div>
                  <span className="text-sm text-amazon-blue">892</span>
                </div>
                <div className="mb-2">
                  <span className="text-2xl font-normal">৳1,85,000</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  FREE delivery <strong>Tomorrow</strong>
                </p>
                <p className="text-xs text-gray-500">
                  15.6" FHD+ Display | NVIDIA GeForce RTX 4050 | Windows 11 Pro
                </p>
              </div>
            </a>

            {/* <!-- Product 5 --> */}
            <a
              href="details.html"
              className="flex gap-4 p-4 border rounded hover:shadow-md transition"
            >
              <div className="w-48 h-48 shrink-0 bg-gray-50 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300"
                  className="h-full object-cover mix-blend-multiply"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-amazon-blue hover:text-amazon-orange font-normal mb-1">
                  Samsung Galaxy Watch 6 classNameic - 47mm, Black
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-amazon-secondary">
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4"></i>
                  </div>
                  <span className="text-sm text-amazon-blue">1,567</span>
                </div>
                <div className="mb-2">
                  <span className="text-2xl font-normal">৳42,000</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  FREE delivery <strong>Tomorrow</strong>
                </p>
                <p className="text-xs text-gray-500">
                  Advanced health monitoring | Sleep tracking | GPS | Water
                  resistant
                </p>
              </div>
            </a>

            {/* <!-- Product 6 --> */}
            <a
              href="details.html"
              className="flex gap-4 p-4 border rounded hover:shadow-md transition"
            >
              <div className="w-48 h-48 shrink-0 bg-gray-50 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1527690710675-4ae7d334803b?w=300"
                  className="h-full object-cover mix-blend-multiply"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-amazon-blue hover:text-amazon-orange font-normal mb-1">
                  Razer BlackWidow V4 Pro Mechanical Gaming Keyboard - RGB
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-amazon-secondary">
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                  </div>
                  <span className="text-sm text-amazon-blue">3,241</span>
                </div>
                <div className="mb-2">
                  <span className="text-2xl font-normal">৳18,500</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  FREE delivery <strong>Tomorrow</strong>
                </p>
                <p className="text-xs text-gray-500">
                  Razer Green Mechanical Switches | Chroma RGB | Programmable
                  keys
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
