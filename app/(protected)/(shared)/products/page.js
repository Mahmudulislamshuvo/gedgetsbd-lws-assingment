import React from "react";
import FilterSectionProduct from "@/components/products/FilterSectionProduct";
import ProductCardForProductPage from "@/components/products/ProductCardForProductPage";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      title: 'Apple MacBook Pro 16" M2 Max - 32GB RAM, 1TB SSD, Space Gray',
      price: "৳3,45,000",
      rating: "1,245",
      image:
        "https://images.unsplash.com/photo-1675868374786-3edd36dddf04?w=300",
      desc: "Apple M2 Max chip | 16-inch Liquid Retina XDR display | 1080p FaceTime HD camera",
    },
    {
      id: 2,
      title: "iPhone 15 Pro Max 256GB - Blue Titanium",
      price: "৳1,65,000",
      rating: "2,891",
      image:
        "https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=300",
      desc: "A17 Pro chip | Titanium design | 48MP Main camera | Action button",
    },
    {
      id: 3,
      title: "Sony WH-1000XM5 Wireless Noise Canceling Headphones - Black",
      price: "৳38,500",
      rating: "5,432",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
      desc: "Industry-leading noise canceling | 30-hour battery life | Multipoint connection",
    },
    {
      id: 4,
      title: "Dell XPS 15 Laptop - Intel i7 13th Gen, 16GB RAM, 512GB SSD",
      price: "৳1,85,000",
      rating: "892",
      image:
        "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=300",
      desc: '15.6" FHD+ Display | NVIDIA GeForce RTX 4050 | Windows 11 Pro',
    },
    {
      id: 5,
      title: "Samsung Galaxy Watch 6 Classic - 47mm, Black",
      price: "৳42,000",
      rating: "1,567",
      image:
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=300",
      desc: "Advanced health monitoring | Sleep tracking | GPS | Water resistant",
    },
    {
      id: 6,
      title: "Razer BlackWidow V4 Pro Mechanical Gaming Keyboard - RGB",
      price: "৳18,500",
      rating: "3,241",
      image:
        "https://images.unsplash.com/photo-1527690710675-4ae7d334803b?w=300",
      desc: "Razer Green Mechanical Switches | Chroma RGB | Programmable keys",
    },
  ];

  return (
    <div className="flex-1 max-w-7xl mx-auto w-full p-4 font-sans text-[#0F1111]">
      {/* --- Results Header --- */}
      <div className="flex justify-between items-center mb-4 shadow-sm border-b border-gray-300 pb-2">
        <div className="text-sm">
          <span>1-16 of over 500 results for </span>
          <span className="font-bold text-[#c45500]">"Electronics"</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Sort by:</span>
          <select className="text-sm bg-gray-100 border border-gray-300 rounded-md px-2 py-1 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#e77600]">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Avg. Customer Review</option>
            <option>Newest Arrivals</option>
          </select>
        </div>
      </div>

      <div className="flex gap-6">
        {/* --- Sidebar Filters --- */}
        <FilterSectionProduct />

        {/* --- Product Grid --- */}
        <div className="flex-1">
          <div className="space-y-4">
            {products.map((product) => (
              <ProductCardForProductPage key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
