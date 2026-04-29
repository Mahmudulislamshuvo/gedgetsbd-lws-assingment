"use client";
import { useDebounce } from "@/utils/useDebounce";
import { Search } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FilterManagelist = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Local state for the search input
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("searchTerm") || "",
  );
  const debouncedSearch = useDebounce(searchTerm, 500);

  // Effect to update URL when debounced search value changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    if (debouncedSearch) {
      params.set("searchTerm", debouncedSearch);
    } else {
      params.delete("searchTerm");
    }
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
  }, [debouncedSearch]);

  const handleFilterChange = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (
      value &&
      value !== "All" &&
      value !== "All Categories" &&
      value !== "All Brands"
    ) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="bg-white border border-gray-300 rounded shadow-sm p-4 mb-6 flex flex-wrap items-center gap-4 text-sm">
      <div className="flex items-center gap-2">
        <span className="font-bold">Status:</span>
        <select
          onChange={(e) => handleFilterChange("status", e.target.value)}
          className="border border-gray-300 py-1 px-2 rounded outline-none focus:ring-1 focus:ring-amazon-blue"
        >
          <option>All</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>
      <div className="flex items-center gap-2 border-l border-gray-300 pl-4">
        <span className="font-bold">Category:</span>
        <select
          onChange={(e) => handleFilterChange("category", e.target.value)}
          value={searchParams.get("category") || "All Categories"}
          className="border border-gray-300 py-1 px-2 rounded outline-none focus:ring-1 focus:ring-amazon-blue"
        >
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
        <select
          onChange={(e) => handleFilterChange("brand", e.target.value)}
          value={searchParams.get("brand") || "All Brands"}
          className="border border-gray-300 py-1 px-2 rounded outline-none focus:ring-1 focus:ring-amazon-blue"
        >
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
          <Search className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            defaultValue={searchParams.get("searchTerm") || ""}
            onChange={(e) => handleFilterChange("searchTerm", e.target.value)}
            placeholder="Search by SKU or Name"
            className="w-full pl-8 pr-2 py-1 border border-gray-300 rounded outline-none focus:ring-1 focus:ring-amazon-blue"
          />
        </div>
      </div>
    </div>
  );
};

export default FilterManagelist;
