import { getShopDetails } from "@/actions";
import Image from "next/image";
import QuantitySelector from "../cart/QuantitySelector";

const SelectedProducts = async ({ products, cartItems }) => {
  const items = products?.data || [];
  const quantitiesByProductId = (cartItems || []).reduce((acc, item) => {
    acc[item.productId] = item.quantity || 1;
    return acc;
  }, {});

  const shopIds = Array.from(
    new Set(items.map((product) => product.shopId).filter(Boolean)),
  );

  const shopResults = await Promise.all(
    shopIds.map((shopId) => getShopDetails(shopId)),
  );

  const shopNameById = shopIds.reduce((acc, shopId, index) => {
    acc[shopId] = shopResults[index]?.data?.name || "Unknown Seller";
    return acc;
  }, {});

  return (
    <div className="pb-6 border-b border-gray-300">
      <div className="flex items-center mb-4">
        <span className="section-number mr-4">2</span>
        <span className="font-bold text-lg">Review items</span>
      </div>

      <div className="box p-4 space-y-4">
        {/* <!-- Product 1 --> */}
        {items.map((product) => (
          <div
            key={product._id}
            className="flex gap-4 pb-4 border-b border-gray-200 last:border-0"
          >
            <div className="w-24 h-24 bg-gray-50 flex items-center justify-center shrink-0">
              <Image
                src={product.images.mainImage}
                className="h-full object-cover"
                width={96}
                height={96}
                alt={product.productName || "Product"}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-medium mb-1">
                {product.productName}
              </h3>
              <p className="text-xs text-gray-600 mb-2">
                Sold by: {shopNameById[product.shopId]}
              </p>
              <div className="flex items-center gap-4">
                <p className="text-sm font-bold text-amazon-orange">
                  ৳{product.price?.toLocaleString()}
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <span>Qty:</span>
                  <QuantitySelector
                    productId={product?._id}
                    initialQuantity={quantitiesByProductId[product?._id]}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedProducts;
