import { Star } from "lucide-react";
import Link from "next/link";

const ProductCardForProductPage = ({ product }) => {
  return (
    <Link
      key={product.id}
      href="/details"
      className="flex flex-col md:flex-row gap-4 p-4 border border-gray-300 rounded hover:shadow-md transition"
    >
      {/* Product Image */}
      <div className="w-full md:w-48 h-48 shrink-0 bg-gray-50 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-auto object-contain mix-blend-multiply"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1">
        <h3 className="text-lg text-[#007185] hover:text-[#c45500] font-normal mb-1 leading-tight">
          {product.title}
        </h3>

        <div className="flex items-center gap-2 mb-2">
          <div className="flex text-[#e77600]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <span className="text-sm text-[#007185]">{product.rating}</span>
        </div>

        <div className="mb-2">
          <span className="text-2xl font-medium">{product.price}</span>
        </div>

        <p className="text-sm text-gray-600 mb-2">
          FREE delivery <span className="font-bold">Tomorrow</span>
        </p>

        <p className="text-xs text-gray-500 line-clamp-2">{product.desc}</p>
      </div>
    </Link>
  );
};

export default ProductCardForProductPage;
