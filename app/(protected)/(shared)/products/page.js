import React from "react";
import FilterSectionProduct from "@/components/products/FilterSectionProduct";
import ProductCardForProductPage from "@/components/products/ProductCardForProductPage";
import { getAllProducts } from "@/actions";

const ProductPage = async ({ searchParams }) => {
  const resolvedSearchParams = await searchParams;
  const pageParam = Number(resolvedSearchParams?.page ?? 1);
  const page = Number.isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;
  const limit = 16;

  const toArray = (value) =>
    Array.isArray(value) ? value.filter(Boolean) : value ? [value] : [];

  const categoryValues = toArray(resolvedSearchParams?.category);
  const brandValues = toArray(resolvedSearchParams?.brand);
  const conditionValues = toArray(resolvedSearchParams?.condition);
  const availabilityValues = toArray(resolvedSearchParams?.availability);

  const filters = {
    sort: resolvedSearchParams?.sort,
    category: categoryValues,
    brand: brandValues,
    minPrice: resolvedSearchParams?.minPrice,
    maxPrice: resolvedSearchParams?.maxPrice,
    reviews: resolvedSearchParams?.reviews,
    availability: availabilityValues,
    condition: conditionValues,
  };

  const productResponse = await getAllProducts(page, limit, filters);

  const products = productResponse?.data ?? [];
  const totalCount = productResponse?.totalCount ?? products.length;
  const start = totalCount === 0 ? 0 : (page - 1) * limit + 1;
  const end = totalCount === 0 ? 0 : Math.min(page * limit, totalCount);
  const categoryLabel = categoryValues.length
    ? categoryValues.join(", ")
    : "Products";

  return (
    <div className="flex-1 max-w-7xl mx-auto w-full p-4 font-sans text-[#0F1111]">
      {/* --- Results Header --- */}
      <div className="flex justify-between items-center mb-4 shadow-sm border-b border-gray-300 pb-2">
        <div className="text-sm">
          <span>
            {start}-{end} of {totalCount} results for{" "}
          </span>
          <span className="font-bold text-[#c45500]">"{categoryLabel}"</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Sort by:</span>
          <select
            defaultValue={resolvedSearchParams?.sort ?? "Featured"}
            className="text-sm bg-gray-100 border border-gray-300 rounded-md px-2 py-1 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#e77600]"
          >
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Avg. Customer Review</option>
            <option>Newest Arrivals</option>
          </select>
        </div>
      </div>

      <div className="flex gap-6">
        {/* --- Sidebar Filters --- */}
        <FilterSectionProduct />

        {/* --- Product Grid --- */}
        <div className="flex-1">
          {products.length === 0 ? (
            <div className="text-sm text-gray-500">No products found.</div>
          ) : (
            <div className="space-y-4">
              {products.map((product) => (
                <ProductCardForProductPage
                  key={product._id || product.id}
                  product={product}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
