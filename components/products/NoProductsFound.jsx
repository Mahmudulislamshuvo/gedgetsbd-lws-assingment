import { SearchX } from "lucide-react";

const NoProductsFound = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-md p-12 text-center h-full min-h-100">
      <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-100">
        <SearchX className="w-10 h-10 text-gray-400" strokeWidth={1.5} />
      </div>

      <h2 className="text-xl font-medium text-[#0F1111] mb-2">
        No results found
      </h2>
      <p className="text-sm text-gray-500 mb-6 max-w-md">
        We couldn't find any products matching your selected filters. Try
        adjusting your categories, price range, or clearing all filters.
      </p>
    </div>
  );
};

export default NoProductsFound;
