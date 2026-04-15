import RelatedProduct from "@/components/details/RelatedProduct";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="flex-1 max-w-375 mx-auto w-full p-4">
      {/* <!-- Breadcrumbs --> */}
      <div className="text-xs text-gray-500 mb-4 flex items-center gap-1">
        <Link href="index.html" className="hover:underline">
          Home
        </Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="products.html" className="hover:underline">
          Electronics
        </Link>

        <ChevronRight className="w-3 h-3" />
        <Link href="products.html" className="hover:underline">
          Laptops & Computers
        </Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-amazon-text font-bold">MacBook Pro</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* <!-- Left: Image Gallery --> */}
        <div className="lg:col-span-5 flex gap-4">
          <div className="flex flex-col gap-2">
            <button className="w-10 h-10 border border-amazon-secondary rounded overflow-hidden hover:shadow-md">
              <img
                src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=100"
                className="w-full h-full object-cover"
              />
            </button>
            <button className="w-10 h-10 border border-gray-300 rounded overflow-hidden hover:shadow-md">
              <img
                src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=100"
                className="w-full h-full object-cover"
              />
            </button>
            <button className="w-10 h-10 border border-gray-300 rounded overflow-hidden hover:shadow-md">
              <img
                src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=100"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
          <div className="flex-1 border border-gray-200 rounded p-4 bg-gray-50">
            <img
              src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* <!-- Center: Product Info --> */}
        <div className="lg:col-span-4">
          <h1 className="text-2xl font-normal mb-2">
            Apple MacBook Pro 16" M2 Max - 32GB RAM, 1TB SSD, Space Gray
          </h1>
          <p className="text-sm text-gray-600 mb-3">
            Visit the
            <Link
              href="shops.html"
              className="text-amazon-blue hover:underline"
            >
              Apple Store
            </Link>
          </p>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex text-amazon-secondary">
              <i data-lucide="star" className="w-4 h-4 fill-current"></i>
              <i data-lucide="star" className="w-4 h-4 fill-current"></i>
              <i data-lucide="star" className="w-4 h-4 fill-current"></i>
              <i data-lucide="star" className="w-4 h-4 fill-current"></i>
              <i data-lucide="star" className="w-4 h-4 fill-current"></i>
            </div>
            <span className="text-sm text-amazon-blue hover:underline cursor-pointer">
              1,245 ratings
            </span>
          </div>

          <div className="border-t border-gray-200 pt-4 mb-4">
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-sm">Price:</span>
              <span className="text-3xl text-amazon-orange">৳3,45,000</span>
            </div>
            <p className="text-xs text-gray-600 mb-2">Inclusive of all taxes</p>
          </div>

          <div className="border-t border-gray-200 pt-4 mb-4">
            <h3 className="font-bold text-base mb-2">About this item</h3>
            <ul className="text-sm space-y-1 list-disc list-inside">
              <li>Apple M2 Max chip for exceptional performance</li>
              <li>16-inch Liquid Retina XDR display</li>
              <li>32GB unified memory, 1TB SSD storage</li>
              <li>1080p FaceTime HD camera</li>
              <li>Six-speaker sound system with force-cancelling woofers</li>
              <li>Up to 21 hours battery life</li>
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <p className="text-sm mb-2">
              <span className="font-bold">Category:</span> Laptops & Computers
            </p>
            <p className="text-sm mb-2">
              <span className="font-bold">Brand:</span> Apple
            </p>
            <p className="text-sm">
              <span className="font-bold">Stock:</span>
              <span className="text-green-600 font-semibold">
                24 units available
              </span>
            </p>
          </div>
        </div>

        {/* <!-- Right: Buy Box --> */}
        <div className="lg:col-span-3">
          <div className="border border-gray-200 rounded p-4">
            <div className="text-3xl text-amazon-orange mb-2">৳3,45,000</div>
            <p className="text-sm mb-3">
              <span className="font-bold">FREE delivery</span>
              <strong>Tomorrow</strong>
            </p>
            <p className="text-green-600 font-bold text-sm mb-4">In Stock</p>

            <div className="mb-4">
              <label className="text-sm font-bold block mb-2">Quantity:</label>
              <select className="border border-gray-300 rounded px-3 py-1 text-sm w-20">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <button className="w-full bg-amazon-yellow hover:bg-amazon-yellow_hover py-2 rounded-md shadow-sm mb-2 text-sm font-medium border border-amazon-secondary">
              Add to Cart
            </button>
            <button className="w-full bg-amazon-secondary hover:bg-amazon-secondary_hover py-2 rounded-md shadow-sm text-sm font-medium text-white">
              Buy Now
            </button>

            <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-600">
              <p className="mb-1">
                <i
                  data-lucide="shield-check"
                  className="w-4 h-4 inline mr-1"
                ></i>
                Secure transaction
              </p>
              <p className="mb-1">
                <i data-lucide="truck" className="w-4 h-4 inline mr-1"></i>
                Ships from Gadgets BD
              </p>
              <p>
                <i data-lucide="package" className="w-4 h-4 inline mr-1"></i>
                Sold by Official Apple Store
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Tabs Section --> */}
      <div className="mt-12">
        <div className="border-b border-gray-300 mb-6">
          <div className="flex gap-8">
            <button
              className="tab-button tab-active pb-2 px-1 text-sm font-medium"
              onclick="switchTab('description')"
            >
              Description
            </button>
            <button
              className="tab-button pb-2 px-1 text-sm font-medium text-gray-600 hover:text-amazon-orange"
              onclick="switchTab('reviews')"
            >
              Reviews
            </button>
            <button
              className="tab-button pb-2 px-1 text-sm font-medium text-gray-600 hover:text-amazon-orange"
              onclick="switchTab('shop')"
            >
              Shop Info
            </button>
          </div>
        </div>

        {/* <!-- Description Tab --> */}
        <div id="description-tab" className="tab-content">
          <h2 className="text-xl font-bold mb-4">Product Description</h2>
          <div className="prose max-w-none text-sm">
            <p className="mb-4">
              The Apple MacBook Pro 16" with M2 Max chip delivers groundbreaking
              performance and amazing battery life. Whether you're compiling
              code, editing 8K video, or working with massive 3D models, the M2
              Max chip handles it all with ease.
            </p>
            <p className="mb-4">
              The stunning 16-inch Liquid Retina XDR display features Extreme
              Dynamic Range, over 1000 nits of brightness for HDR content, and
              pro reference modes. The advanced thermal system sustains
              pro-level performance, and the six-speaker sound system with
              force-cancelling woofers creates an immersive audio experience.
            </p>
            <h3 className="font-bold mt-6 mb-2">Key Features:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Apple M2 Max chip with 12-core CPU and 38-core GPU</li>
              <li>32GB unified memory for seamless multitasking</li>
              <li>1TB SSD storage</li>
              <li>16-inch Liquid Retina XDR display (3456 x 2234)</li>
              <li>1080p FaceTime HD camera</li>
              <li>Three Thunderbolt 4 ports, HDMI port, SDXC card slot</li>
              <li>MagSafe 3 charging port</li>
              <li>Backlit Magic Keyboard with Touch ID</li>
            </ul>
          </div>
        </div>

        {/* <!-- Reviews Tab --> */}
        <div id="reviews-tab" className="tab-content hidden">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Customer Reviews</h2>
            <button
              onclick="window.location.href = 'ReviewModal.html'"
              className="bg-amazon-yellow hover:bg-amazon-yellow_hover px-4 py-2 rounded-md text-sm font-medium border border-amazon-secondary"
            >
              Write a Review
            </button>
          </div>

          <div className="mb-6 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex text-amazon-secondary">
                <i data-lucide="star" className="w-5 h-5 fill-current"></i>
                <i data-lucide="star" className="w-5 h-5 fill-current"></i>
                <i data-lucide="star" className="w-5 h-5 fill-current"></i>
                <i data-lucide="star" className="w-5 h-5 fill-current"></i>
                <i data-lucide="star" className="w-5 h-5 fill-current"></i>
              </div>
              <span className="text-lg font-bold">4.8 out of 5</span>
            </div>
            <span className="text-sm text-gray-600">1,245 global ratings</span>
          </div>

          {/* <!-- Review List --> */}
          <div className="space-y-6" id="reviewList">
            {/* <!-- Review 1 --> */}
            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold">
                  JD
                </div>
                <div>
                  <p className="font-bold text-sm">John Doe</p>
                  <div className="flex text-amazon-secondary">
                    <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                    <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                    <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                    <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                    <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-sm mb-1">
                Best laptop I've ever owned
              </h4>
              <p className="text-xs text-gray-500 mb-2">
                Reviewed in Bangladesh on January 15, 2025
              </p>
              <p className="text-sm">
                The M2 Max chip is incredibly fast. I use this for video editing
                and 3D rendering, and it handles everything smoothly. Battery
                life is amazing too!
              </p>
            </div>

            {/* <!-- Review 2 --> */}
            <div className="border-b border-gray-200 pb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold">
                  SA
                </div>
                <div>
                  <p className="font-bold text-sm">Sarah Ahmed</p>
                  <div className="flex text-amazon-secondary">
                    <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                    <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                    <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                    <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                    <i data-lucide="star" className="w-3 h-3"></i>
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-sm mb-1">
                Great for development work
              </h4>
              <p className="text-xs text-gray-500 mb-2">
                Reviewed in Bangladesh on January 10, 2025
              </p>
              <p className="text-sm">
                Perfect for coding and running multiple VMs. The display is
                stunning and the keyboard is comfortable for long coding
                sessions.
              </p>
            </div>

            {/* <!-- Review 3 --> */}
            <div className="border-b border-gray-200 pb-6 hidden review-item">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold">
                  MK
                </div>
                <div>
                  <p className="font-bold text-sm">Mehedi Khan</p>
                  <div className="flex text-amazon-secondary">
                    <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                    <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                    <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                    <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                    <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-sm mb-1">Worth every taka!</h4>
              <p className="text-xs text-gray-500 mb-2">
                Reviewed in Bangladesh on January 5, 2025
              </p>
              <p className="text-sm">
                Expensive but absolutely worth it. The build quality is premium
                and performance is unmatched.
              </p>
            </div>

            {/* <!-- Review 4 --> */}
            <div className="border-b border-gray-200 pb-6 hidden review-item">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold">
                  RH
                </div>
                <div>
                  <p className="font-bold text-sm">Rahim Hossain</p>
                  <div className="flex text-amazon-secondary">
                    <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                    <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                    <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                    <i data-lucide="star" className="w-3 h-3 fill-current"></i>
                    <i data-lucide="star" className="w-3 h-3"></i>
                  </div>
                </div>
              </div>
              <h4 className="font-bold text-sm mb-1">
                Excellent for creative work
              </h4>
              <p className="text-xs text-gray-500 mb-2">
                Reviewed in Bangladesh on December 28, 2024
              </p>
              <p className="text-sm">
                As a graphic designer, this laptop handles Photoshop and
                Illustrator like a breeze. Highly recommended!
              </p>
            </div>
          </div>

          <button
            id="loadMoreBtn"
            onclick="loadMoreReviews()"
            className="mt-6 px-6 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
          >
            Load More Reviews
          </button>
        </div>

        {/* <!-- Shop Info Tab --> */}
        <div id="shop-tab" className="tab-content hidden">
          <h2 className="text-xl font-bold mb-4">Shop Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-2">Official Apple Store</h3>
              <p className="text-sm text-gray-600 mb-4">
                Authorized Apple reseller providing genuine products with
                official warranty.
              </p>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-bold">Rating:</span> 4.9/5 (2,450
                  reviews)
                </p>
                <p>
                  <span className="font-bold">Products:</span> 156 items
                </p>
                <p>
                  <span className="font-bold">Joined:</span>
                  January 2020
                </p>
                <p>
                  <span className="font-bold">Response Time:</span>
                  Within 2 hours
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-2">Policies</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <i
                    data-lucide="check-circle"
                    className="w-4 h-4 inline text-green-600 mr-1"
                  ></i>
                  14-day return policy
                </p>
                <p>
                  <i
                    data-lucide="check-circle"
                    className="w-4 h-4 inline text-green-600 mr-1"
                  ></i>
                  1-year official warranty
                </p>
                <p>
                  <i
                    data-lucide="check-circle"
                    className="w-4 h-4 inline text-green-600 mr-1"
                  ></i>
                  Free shipping on orders over ৳50,000
                </p>
                <p>
                  <i
                    data-lucide="check-circle"
                    className="w-4 h-4 inline text-green-600 mr-1"
                  ></i>
                  Secure payment options
                </p>
              </div>
              <a
                href="shops.html"
                className="inline-block mt-4 text-amazon-blue hover:underline text-sm"
              >
                Visit Shop Page →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Related Products --> */}
      <RelatedProduct />
    </main>
  );
};

export default page;
