import { getShopDetails } from "@/actions";
import Image from "next/image";
import QuantitySelector from "./QuantitySelector";

const CartItems = async ({ item, cartItems }) => {
  const shopDertails = await getShopDetails(item.shopId);
  const cartItem = cartItems.find((ci) => ci.productId === item._id);
  const initialQuantity = cartItem?.quantity || 1;

  return (
    <div className="p-4 border-b border-gray-300 flex gap-4 hover:bg-gray-50">
      <div className="w-32 h-32 shrink-0">
        <Image
          src={item?.images?.mainImage || "/placeholder.png"}
          className="w-full h-full object-cover rounded border border-gray-200"
          alt="Product"
          width={128}
          height={128}
        />
      </div>

      <div className="flex-1">
        <h3 className="font-medium text-base mb-1">
          <a
            href="details.html"
            className="text-amazon-blue hover:text-amazon-orange hover:underline"
          >
            {item.productName}
          </a>
        </h3>
        <p className="text-sm text-green-700 font-medium">In Stock</p>
        <p className="text-xs text-gray-600 mt-1">
          Sold by: {shopDertails.data?.name || "Unknown Seller"}
        </p>
        <p className="text-xs text-gray-600">Eligible for FREE Shipping</p>

        <div className="flex items-center gap-4 mt-3">
          {/* Quantity Selector */}
          <QuantitySelector
            productId={item._id}
            initialQuantity={initialQuantity}
          />

          <span className="text-gray-300">|</span>

          {/* Delete Button */}
          <button className="text-sm text-amazon-blue hover:text-amazon-orange hover:underline">
            Delete
          </button>

          <span className="text-gray-300">|</span>

          {/* Save for Later */}
          <button className="text-sm text-amazon-blue hover:text-amazon-orange hover:underline">
            Save for Later
          </button>
        </div>
      </div>

      <div className="text-right">
        <p className="text-lg font-bold text-amazon-orange">
          ৳{item.price?.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default CartItems;
