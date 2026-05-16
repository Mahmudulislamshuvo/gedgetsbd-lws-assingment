"use client";

import { initiatePayment } from "@/actions";
import { toast } from "@/utils/toastify";
import { ShieldCheck, Truck } from "lucide-react";
import { useState } from "react";

const RideSideSummery = ({ userInfo, cartItems }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const productTotalPrice = cartItems
    ?.map((item) => item.quantity * item.price)
    .reduce((a, b) => a + b, 0);

  const productTotalItems = cartItems?.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const grandTotal =
    productTotalPrice >= 5000
      ? productTotalPrice + 50
      : productTotalPrice + 150 + 50;

  let gotoPayment = true;

  if (!userInfo?.address?.district || !userInfo?.phone) {
    gotoPayment = false;
  }

  const handleInitiatePaymentProcess = async () => {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await initiatePayment(userInfo, grandTotal);
      if (response?.redirectUrl) {
        window.location.href = response.redirectUrl;
        return;
      }
      if (response?.success === false) {
        toast.error(response.error || "Payment initiation failed");
      }
    } catch (error) {
      console.error("Payment initiation failed:", error);
      toast.error("Payment initiation failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full lg:w-75">
      <div className="box p-4 sticky top-10">
        <button
          disabled={gotoPayment === false || isSubmitting}
          onClick={() => handleInitiatePaymentProcess()}
          className="w-full py-2 mb-4 rounded-md btn-primary text-sm font-normal shadow-sm"
        >
          {isSubmitting ? "Redirecting..." : "Place your order"}
        </button>
        <p className="text-[10px] text-gray-500 text-center mb-4 border-b border-gray-300 pb-4 leading-tight">
          By placing your order, you agree to Gadgets BD's
          <a
            href="#"
            className="text-amazon-blue text-xs hover:underline hover:text-amazon-orange"
          >
            privacy notice
          </a>
          and
          <a
            href="#"
            className="text-amazon-blue text-xs hover:underline hover:text-amazon-orange"
          >
            conditions of use
          </a>
          .
        </p>

        <h3 className="font-bold text-lg mb-4">Order Summary</h3>
        <div className="space-y-2 text-xs text-gray-600">
          <div className="flex justify-between">
            <span>Items ({productTotalItems}):</span>
            <span>৳{productTotalPrice?.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee:</span>
            <span className="text-green-600 font-bold">
              {productTotalPrice >= 5000 ? "FREE" : 150}
            </span>
          </div>
          <div className="flex justify-between border-b border-gray-200 pb-2">
            <span>Service Fee:</span>
            <span>50</span>
          </div>
          <div className="flex justify-between text-amazon-orange text-lg font-bold pt-2">
            <span>Order Total:</span>
            <span>৳{grandTotal?.toLocaleString()}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200 text-xs">
          <p className="text-green-600 font-bold mb-2">
            <Truck className="w-4 h-4 inline mr-1" />
            FREE Delivery on orders over ৳50,000
          </p>
          <p className="text-gray-600">
            <ShieldCheck className="w-4 h-4 inline mr-1" />
            Secure checkout
          </p>
        </div>
      </div>
    </div>
  );
};

export default RideSideSummery;
