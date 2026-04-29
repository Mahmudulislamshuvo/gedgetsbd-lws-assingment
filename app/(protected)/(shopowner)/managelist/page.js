import { getAllProducts } from "@/actions";
import AllProductTable from "@/components/managelist/AllProductTable";
import Pagination from "@/components/managelist/Pagination";
import { auth } from "@/lib/auth";
import Link from "next/link";
import React from "react";

const ManageListPage = async ({ searchParams }) => {
  const session = await auth();
  const shopId = session?.user?.shopId;

  const pageParam = Number(searchParams?.page ?? 1);
  const page = Number.isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;
  const limit = 10;

  const shopAllProductData = await getAllProducts(shopId, page, limit);

  const shopAllProduct = shopAllProductData?.data ?? [];
  const pagination = shopAllProductData?.pagination ?? {
    total: shopAllProduct.length,
    page,
    limit,
    totalPages: 1,
  };
  const total = pagination.total ?? shopAllProduct.length;
  const totalPages = pagination.totalPages ?? 1;
  const currentPage = pagination.page ?? page;
  const start = total === 0 ? 0 : (currentPage - 1) * limit + 1;
  const end = total === 0 ? 0 : Math.min(currentPage * limit, total);

  return (
    <div className="w-full p-6">
      <div className="max-w-375 mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-normal">Manage Inventory</h1>
          <Link
            href="/managelist/create"
            className="bg-amazon-yellow hover:bg-amazon-yellow_hover px-6 py-2 rounded-md text-sm font-bold shadow-sm border border-amazon-secondary transition-colors"
          >
            Add a Product
          </Link>
        </div>

        {/* <!-- Filters --> */}
        <div className="bg-white border border-gray-300 rounded shadow-sm p-4 mb-6 flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold">Status:</span>
            <select className="border border-gray-300 py-1 px-2 rounded outline-none focus:ring-1 focus:ring-amazon-blue">
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div className="flex items-center gap-2 border-l border-gray-300 pl-4">
            <span className="font-bold">Category:</span>
            <select className="border border-gray-300 py-1 px-2 rounded outline-none focus:ring-1 focus:ring-amazon-blue">
              <option>All Categories</option>
              <option>Laptops & Computers</option>
              <option>Smartphones & Tablets</option>
              <option>Audio & Headphones</option>
              <option>Gaming Accessories</option>
              <option>Cameras & Photography</option>
              <option>Wearables & Smartwatches</option>
            </select>
          </div>
          <div className="flex items-center gap-2 border-l border-gray-300 pl-4">
            <span className="font-bold">Brand:</span>
            <select className="border border-gray-300 py-1 px-2 rounded outline-none focus:ring-1 focus:ring-amazon-blue">
              <option>All Brands</option>
              <option>Apple</option>
              <option>Samsung</option>
              <option>Dell</option>
              <option>HP</option>
              <option>Lenovo</option>
              <option>Sony</option>
              <option>Razer</option>
            </select>
          </div>
          <div className="flex-1 flex items-center gap-2 border-l border-gray-300 pl-4">
            <div className="relative w-full max-w-sm">
              <i
                data-lucide="search"
                className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
              ></i>
              <input
                type="text"
                placeholder="Search by SKU or Name"
                className="w-full pl-8 pr-2 py-1 border border-gray-300 rounded outline-none focus:ring-1 focus:ring-amazon-blue"
              />
            </div>
          </div>
        </div>

        {/* <!-- Table --> */}
        <div className="bg-white border border-gray-300 rounded shadow-sm overflow-x-auto">
          <AllProductTable shopAllProduct={shopAllProduct} />
        </div>

        {/* <!-- Pagination --> */}
        <Pagination
          start={start}
          end={end}
          total={total}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default ManageListPage;
