import { Star } from "lucide-react";

const FilterSectionProduct = () => {
  return (
    <div className="w-64 hidden lg:block shrink-0 border-r pr-4 border-gray-300">
      <div className="mb-6">
        <h3 className="font-bold text-base mb-3">Category</h3>
        <div className="space-y-2">
          {[
            "Laptops & Computers",
            "Smartphones & Tablets",
            "Audio & Headphones",
            "Gaming Accessories",
            "Cameras & Photography",
          ].map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 cursor-pointer hover:text-[#c45500]"
            >
              <input
                type="checkbox"
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
          {[4, 3, 2, 1].map((num) => (
            <label
              key={num}
              className="flex items-center gap-2 cursor-pointer hover:text-[#c45500]"
            >
              <input
                type="checkbox"
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
          {[
            "Under ৳10,000",
            "৳10,000 - ৳25,000",
            "৳25,000 - ৳50,000",
            "Over ৳1,00,000",
          ].map((range) => (
            <label
              key={range}
              className="flex items-center gap-2 cursor-pointer hover:text-[#c45500]"
            >
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300"
              />
              <span className="text-sm">{range}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSectionProduct;
