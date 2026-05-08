import { ChevronRight } from "lucide-react";

const BreadCrumb = () => {
  return (
    <div className="text-xs text-gray-500 mb-4 flex items-center gap-1">
      <a href="index.html" className="hover:underline">
        Home
      </a>
      <ChevronRight className="w-3 h-3" />
      <a href="products.html" className="hover:underline">
        Electronics
      </a>
      <ChevronRight className="w-3 h-3" />
      <a href="products.html" className="hover:underline">
        Laptops & Computers
      </a>
      <ChevronRight className="w-3 h-3" />
      <span className="text-amazon-text font-bold">MacBook Pro</span>
    </div>
  );
};

export default BreadCrumb;
