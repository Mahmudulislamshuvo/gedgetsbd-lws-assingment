"use client";

import { Star } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const FilterSectionProduct = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const categories = [
    "Laptops & Computers",
    "Smartphones & Tablets",
    "Audio & Headphones",
    "Gaming Accessories",
    "Cameras & Photography",
  ];

  const reviewOptions = [4, 3, 2, 1];

  const priceRanges = [
    { label: "Under ৳10,000", max: 10000 },
    { label: "৳10,000 - ৳25,000", min: 10000, max: 25000 },
    { label: "৳25,000 - ৳50,000", min: 25000, max: 50000 },
    { label: "Over ৳1,00,000", min: 100000 },
  ];

  const getParams = () => new URLSearchParams(searchParams.toString());

  const toggleMultiValue = (key, value) => {
    const params = getParams();
    const currentValues = params.getAll(key);
    const nextValues = currentValues.includes(value)
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];

    params.delete(key);
    nextValues.forEach((item) => params.append(key, item));
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
  };

  const isPriceSelected = (range) => {
    const currentMin = searchParams.get("minPrice");
    const currentMax = searchParams.get("maxPrice");
    const hasMin = typeof range.min === "number";
    const hasMax = typeof range.max === "number";

    if (hasMin && hasMax) {
      return (
        currentMin === String(range.min) && currentMax === String(range.max)
      );
    }
    if (hasMin && !hasMax) {
      return currentMin === String(range.min) && !currentMax;
    }
    return !currentMin && currentMax === String(range.max);
  };

  const togglePriceRange = (range) => {
    const params = getParams();
    const selected = isPriceSelected(range);

    params.delete("minPrice");
    params.delete("maxPrice");

    if (!selected) {
      if (typeof range.min === "number") {
        params.set("minPrice", String(range.min));
      }
      if (typeof range.max === "number") {
        params.set("maxPrice", String(range.max));
      }
    }

    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
  };

  const selectedCategories = searchParams.getAll("category");
  const selectedReviews = searchParams.getAll("reviews");

  return (
    <div className="w-64 hidden lg:block shrink-0 border-r pr-4 border-gray-300">
      <div className="mb-6">
        <h3 className="font-bold text-base mb-3">Category</h3>
        <div className="space-y-2">
          {categories.map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 cursor-pointer hover:text-[#c45500]"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(item)}
                onChange={() => toggleMultiValue("category", item)}
                className="w-4 h-4 rounded border-gray-300 text-[#e77600] focus:ring-[#e77600]"
              />
              <span className="text-sm">{item}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t pt-4 mb-6 border-gray-300">
        <h3 className="font-bold text-base mb-3">Customer Reviews</h3>
        <div className="space-y-2">
          {reviewOptions.map((num) => (
            <label
              key={num}
              className="flex items-center gap-2 cursor-pointer hover:text-[#c45500]"
            >
              <input
                type="checkbox"
                checked={selectedReviews.includes(String(num))}
                onChange={() => toggleMultiValue("reviews", String(num))}
                className="w-4 h-4 rounded border-gray-300"
              />
              <div className="flex items-center gap-1">
                <div className="flex text-[#e77600] text-sm">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < num ? "currentColor" : "none"}
                    />
                  ))}
                </div>
                <span className="text-sm">& Up</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t pt-4 border-gray-300">
        <h3 className="font-bold text-base mb-3">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label
              key={range.label}
              className="flex items-center gap-2 cursor-pointer hover:text-[#c45500]"
            >
              <input
                type="checkbox"
                checked={isPriceSelected(range)}
                onChange={() => togglePriceRange(range)}
                className="w-4 h-4 rounded border-gray-300"
              />
              <span className="text-sm">{range.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSectionProduct;
