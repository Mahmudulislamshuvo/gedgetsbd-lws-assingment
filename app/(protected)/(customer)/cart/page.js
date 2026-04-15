"use client";

import CartItems from "@/components/cart/CartItems";
import Link from "next/link";

const cartItems = [
  {
    id: 1,
    title: 'Apple MacBook Pro 16" M2 Max - 32GB RAM, 1TB SSD',
    image: "https://images.unsplash.com/photo-1517336712461-481140081023?w=300",
    price: "৳3,45,000",
    stockStatus: "In Stock",
    seller: "Official Apple Store",
    shipping: "Eligible for FREE Shipping",
    qty: 1,
    link: "/details",
  },
  {
    id: 2,
    title: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=300",
    price: "৳35,000",
    stockStatus: "Only 2 left in stock",
    seller: "Gadgets BD",
    shipping: "Eligible for FREE Shipping",
    qty: 2,
    link: "/details",
  },
];

const CartPage = () => {
  return (
    <div className="max-w-375 mx-auto w-full p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* */}
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
            {cartItems.map((item) => (
              <CartItems key={item.id} item={item} />
            ))}

            {/* */}
            <div className="p-4 text-right">
              <p className="text-lg">
                Subtotal ({cartItems.length} items):{" "}
                <span className="font-bold text-amazon-orange">৳3,80,000</span>
              </p>
            </div>
          </div>
        </div>

        {/* */}
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
                Subtotal ({cartItems.length} items):{" "}
                <span className="font-bold text-amazon-orange">৳3,80,000</span>
              </p>
              <div className="flex items-start gap-2 text-xs">
                <input type="checkbox" id="gift" className="mt-0.5" />
                <label htmlFor="gift" className="text-gray-700">
                  This order contains a gift
                </label>
              </div>
            </div>

            <button
              onClick={() => router.push("/paymentProcess")}
              className="w-full py-2 bg-amazon-yellow hover:bg-amazon-yellow_hover border border-amazon-secondary rounded-md text-sm font-bold shadow-sm transition-colors mb-2"
            >
              Proceed to Checkout
            </button>

            <div className="text-xs text-gray-600 mt-4">
              <p className="mb-2">
                <i
                  data-lucide="shield-check"
                  className="w-3 h-3 inline mr-1"
                ></i>
                Secure transaction
              </p>
              <p>
                <i data-lucide="truck" className="w-3 h-3 inline mr-1"></i>
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
