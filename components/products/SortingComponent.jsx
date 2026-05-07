"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SortingComponent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") ?? "Featured";

  const handleChange = (event) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", event.target.value);
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <select
      value={currentSort}
      onChange={handleChange}
      className="text-sm bg-gray-100 border border-gray-300 rounded-md px-2 py-1 shadow-sm focus:outline-none focus:ring-1 focus:ring-[#e77600]"
    >
      <option>Featured</option>
      <option>Price: Low to High</option>
      <option>Price: High to Low</option>
      <option>Avg. Customer Review</option>
      <option>Newest Arrivals</option>
    </select>
  );
};

export default SortingComponent;
