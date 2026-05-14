import { getAllShops } from "@/actions";
import Pagination from "@/components/shops/Pagination";
import ShopCard from "@/components/shops/ShopCard";

const ShopsPage = async ({ searchParams }) => {
  const brandParam = searchParams?.brands;
  const brandFilter = Array.isArray(brandParam) ? brandParam[0] : brandParam;
  const pageParam = Number(searchParams?.page || 1);
  const limit = 6;

  const page = Number.isFinite(pageParam) && pageParam > 0 ? pageParam : 1;

  const { data: shops = [], totalCount = 0 } = await getAllShops(
    page,
    limit,
    brandFilter,
  );
  const totalPages = Math.max(1, Math.ceil(totalCount / limit));

  const query = {};
  if (brandFilter) {
    query.brands = brandFilter;
  }

  return (
    <div className="max-w-375 mx-auto w-full p-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Featured Shops & Storefronts</h1>
        <p className="text-sm text-gray-600">
          Discover trusted tech shops delivering premium gadgets across
          Bangladesh.
        </p>
      </div>

      {/* <!-- Shops Grid --> */}
      <ShopCard shops={shops} />

      {/* <!-- Pagination --> */}
      <Pagination currentPage={page} totalPages={totalPages} query={query} />
    </div>
  );
};

export default ShopsPage;
