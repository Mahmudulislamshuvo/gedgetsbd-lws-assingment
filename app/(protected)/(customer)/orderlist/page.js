import FilterOrders from "@/components/orderlist/FilterOrders";
import OrderHistry from "@/components/orderlist/OrderHistry";
import PendingOrder from "@/components/orderlist/PendingOrder";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const OrderListPage = () => {
  return (
    <main className="max-w-250 mx-auto w-full p-4 py-6">
      <div className="flex items-center gap-2 text-sm mb-4">
        <Link href="/profile" className="text-amazon-blue hover:underline">
          Your Account
        </Link>

        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-amazon-orange">Your Orders</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-3xl font-normal">Your Orders</h1>
      </div>

      <FilterOrders />

      {/* <!-- Orders List --> */}
      <div className="space-y-6">
        {/* <!-- Order 1 --> */}
        <OrderHistry />

        {/* <!-- Order 2 --> */}
        <PendingOrder />
      </div>
    </main>
  );
};

export default OrderListPage;
