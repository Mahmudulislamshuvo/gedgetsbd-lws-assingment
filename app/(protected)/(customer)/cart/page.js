import CartItems from "@/components/cart/CartItems";

import Link from "next/link";
import { getUserCartItems } from "@/utils/getCarts";
import { getProductsByIds } from "@/actions";
import { ShieldCheck, Truck } from "lucide-react";

const CartPage = async () => {
  const cartItems = await getUserCartItems();

  const existingCartItems = await getProductsByIds(
    cartItems.map((item) => item.productId),
  );

  const cartItemsTotalPrice = existingCartItems?.data?.reduce((total, item) => {
    const cartItem = cartItems.find((ci) => ci.productId === item._id);
    return total + (cartItem?.quantity || 1) * item.price;
  }, 0);

  //
  return (
    <div className="max-w-375 mx-auto w-full p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* left side cart items */}
        <div className="flex-1">
          {/* */}
          <div className="bg-white p-4 mb-4 border-b border-gray-300">
            <h1 className="text-2xl font-normal mb-2">Shopping Cart</h1>
            <div className="text-sm text-gray-600">
              <Link
                href="/products"
                className="text-amazon-blue hover:underline"
              >
                Continue shopping
              </Link>
            </div>
          </div>

          {/* */}
          <div className="bg-white">
            {existingCartItems.data?.map((item) => (
              <CartItems key={item._id} item={item} cartItems={cartItems} />
            ))}

            {/* */}
            <div className="p-4 text-right">
              <p className="text-lg">
                Subtotal ({cartItems.length} items):{" "}
                <span className="font-bold text-amazon-orange">
                  ৳{cartItemsTotalPrice?.toLocaleString()}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* right side checkout options */}
        <div className="lg:w-80">
          <div className="bg-white p-4 border border-gray-300 rounded">
            <div className="mb-4">
              <p className="text-sm mb-2">
                <i
                  data-lucide="check-circle"
                  className="w-4 h-4 inline text-green-600 mr-1"
                ></i>
                <span className="text-green-700 font-medium">
                  Your order qualifies for FREE Shipping!
                </span>
              </p>
            </div>

            <div className="mb-4">
              <p className="text-lg mb-1">
                Subtotal ({cartItems.length} items):
                <span className="font-bold text-amazon-orange">
                  ৳{cartItemsTotalPrice?.toLocaleString()}
                </span>
              </p>
              <div className="flex items-start gap-2 text-xs">
                <input type="checkbox" id="gift" className="mt-0.5" />
                <label htmlFor="gift" className="text-gray-700">
                  This order contains a gift
                </label>
              </div>
            </div>

            <Link
              href="/payment-process"
              className="w-full py-2 bg-amazon-yellow hover:bg-amazon-yellow_hover border border-amazon-secondary rounded-md text-sm font-bold shadow-sm transition-colors mb-2 text-center block"
            >
              Proceed to Checkout
            </Link>

            <div className="text-xs text-gray-600 mt-4">
              <p className="mb-2">
                <ShieldCheck className="w-3 h-3 inline mr-1" />
                Secure transaction
              </p>
              <p>
                <Truck className="w-3 h-3 inline mr-1" />
                Ships from Gadgets BD
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
