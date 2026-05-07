import { getAllProducts, getShopDetails } from "@/actions";
import Link from "next/link";
import SwiperSlider from "../common/SwiperSlider";
import Image from "next/image";

const ProductCard = async () => {
  const newarrivalProducts = await getAllProducts(1, 10, {
    sort: "Newest Arrivals",
  });

  return (
    <SwiperSlider>
      {newarrivalProducts?.data?.map(async (product) => {
        const shopByProduct = await getShopDetails(product.shopId);

        return (
          <div className="flex-none w-48">
            <Link href={`products/${product.id}`} className="block">
              <div className="bg-gray-50 h-48 flex items-center justify-center mb-2 p-2">
                <Image
                  src={product.images.mainImage}
                  alt={product.productName}
                  width={150}
                  height={150}
                />
              </div>
              <div className="text-sm hover:text-amazon-orange text-amazon-blue line-clamp-2">
                {product.name}
              </div>
            </Link>
            <div className="text-xs text-gray-500">
              {shopByProduct?.data?.name || "Official Apple Store"}
            </div>
            <div className="mt-1">
              <span className="text-xs align-top">৳</span>
              <span className="text-xl font-bold">
                {product.price.toLocaleString()}
              </span>
            </div>
            <div className="text-xs text-gray-500 mb-2">Get it by Tomorrow</div>
            <button className="w-full bg-amazon-yellow hover:bg-amazon-yellow_hover text-sm py-1.5 rounded-md shadow-sm font-medium border border-amazon-secondary transition-colors">
              Add to Cart
            </button>
          </div>
        );
      })}
    </SwiperSlider>
  );
};

export default ProductCard;
