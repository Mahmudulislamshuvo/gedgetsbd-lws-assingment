import BrandsCard from "@/components/home/BrandsCard";
import CategoryGridCard from "@/components/home/CategoryCard";
import PopularCategory from "@/components/home/PopularCategory";
import ProductCard from "@/components/home/ProductCard";
import Link from "next/link";
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
            <CategoryGridCard />
          </div>

          {/* <!-- Featured Product Carousel (Horizontal Scroll) --> */}
          <div className="mt-8 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-bold">Featured Products</h2>
              <Link
                href="/products"
                className="text-amazon-blue text-sm hover:underline hover:text-red-700"
              >
                View All
              </Link>
            </div>

            <div className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide">
              {/* <!-- Product 1 --> */}
              <ProductCard />
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
            <PopularCategory />
          </div>
        </div>

        {/* <!-- Shop by Brand Section --> */}
        <div className="bg-white py-8 mt-8">
          <div className="max-w-375 mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Shop by Brand</h2>
            <div className="flex gap-6 overflow-x-auto pb-4">
              <BrandsCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
