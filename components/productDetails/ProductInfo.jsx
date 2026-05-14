import { getShopDetails } from "@/actions";
import { auth } from "@/lib/auth";
import Link from "next/link";

const ProductInfo = async ({ product }) => {
  const session = await auth();
  const shopId = session?.user?.shopId;
  const shopdetails = shopId ? await getShopDetails(shopId) : null;

  const productSpecifications = Object.values(
    product?.data?.specifications || {},
  );

  return (
    <>
      {
        <div className="lg:col-span-4">
          <h1 className="text-2xl font-normal mb-2">{product?.data?.name}</h1>
          <p className="text-sm text-gray-600 mb-3">
            Visit the
            {shopdetails?.data?.name ? (
              <Link
                href={`/shops/${shopId}`}
                className="text-amazon-blue hover:underline"
              >
                {` ${shopdetails?.data?.name} Store`}
              </Link>
            ) : (
              <span className="text-gray-500"> Shop not available</span>
            )}
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
              <span className="text-3xl text-amazon-orange">
                ৳ {product?.data?.price}
              </span>
            </div>
            <p className="text-xs text-gray-600 mb-2">Inclusive of all taxes</p>
          </div>

          <div className="border-t border-gray-200 pt-4 mb-4">
            <h3 className="font-bold text-base mb-2">About this item</h3>
            <ul className="text-sm space-y-1 list-disc list-inside">
              {productSpecifications?.map((specification, i) => (
                <li key={i}>{specification}</li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <p className="text-sm mb-2">
              <span className="font-bold">Category:</span>{" "}
              {product?.data?.category}
            </p>
            <p className="text-sm mb-2">
              <span className="font-bold">Brand:</span> {product?.data?.brand}
            </p>
            <p className="text-sm">
              <span className="font-bold">Stock:</span>
              <span className="text-green-600 font-semibold">
                {product?.data?.stockQuantity} units available
              </span>
            </p>
          </div>
        </div>
      }
    </>
  );
};

export default ProductInfo;
