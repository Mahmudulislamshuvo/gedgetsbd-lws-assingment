import Link from "next/link";
import React from "react";

const PopularCategory = () => {
  // http://localhost:3000/products?category=Laptops%20%26%20Computers&page=1

  const categories = [
    {
      title: "Laptops",
      img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200",
      link: "products?category=Laptops&page=1",
    },
    {
      title: "Smartphones",
      img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200",
      link: "products?category=Smartphones&page=1",
    },
    {
      title: "Audio",
      img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200",
      link: "products?category=Audio&page=1",
    },
    {
      title: "Gaming",
      img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=200",
      link: "products?category=Gaming&page=1",
    },
    {
      title: "Cameras",
      img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=200",
      link: "products?category=Cameras&page=1",
    },
    {
      title: "Wearables",
      img: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=200",
      link: "products?category=Wearables&page=1",
    },
  ];
  return (
    <>
      {categories.map((category, index) => (
        <Link
          key={index}
          href={category.link}
          className="bg-white p-4 text-center hover:shadow-md transition-shadow border border-gray-200 rounded block"
        >
          <div className="h-32 flex items-center justify-center mb-2">
            <img
              src={category.img}
              className="h-full object-cover"
              alt={category.title}
            />
          </div>
          <h3 className="font-medium text-sm">{category.title}</h3>
        </Link>
      ))}
    </>
  );
};

export default PopularCategory;
