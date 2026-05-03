import { getAllProducts } from "@/actions";
import AllProductTable from "@/components/managelist/AllProductTable";
import FilterManagelist from "@/components/managelist/FilterManagelist";
import Pagination from "@/components/managelist/Pagination";
import { auth } from "@/lib/auth";
import Link from "next/link";
import React from "react";

const ManageListPage = async ({ searchParams }) => {
  const session = await auth();
  const shopId = session?.user?.shopId;

  const resolvedSearchParams = await searchParams;

  const pageParam = Number(resolvedSearchParams?.page ?? 1);
  const page = Number.isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;
  const limit = 10;

  const shopAllProductData = await getAllProducts(shopId, page, limit, {
    status: resolvedSearchParams?.status ?? "All",
    category: resolvedSearchParams?.category ?? "All Categories",
    brand: resolvedSearchParams?.brand ?? "All Brands",
    searchTerm: resolvedSearchParams?.searchTerm ?? "",
  });

  // const shopAllProductData = await getAllProducts(shopId, page, limit);

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
        <FilterManagelist />

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
