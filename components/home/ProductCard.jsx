const ProductCard = () => {
  return (
    <div className="flex-none w-48">
      <a href="details.html">
        <div className="bg-gray-50 h-48 flex items-center justify-center mb-2 p-2">
          <img
            src="https://images.unsplash.com/photo-1675868374786-3edd36dddf04?w=300"
            className="h-full object-cover mix-blend-multiply"
          />
        </div>
        <div className="text-sm hover:text-amazon-orange text-amazon-blue line-clamp-2">
          Apple MacBook Pro M2, 16GB RAM, 512GB SSD
        </div>
      </a>
      <div className="text-xs text-gray-500">Official Apple Store</div>
      <div className="mt-1">
        <span className="text-xs align-top">৳</span>
        <span className="text-xl font-bold">1,85,000</span>
      </div>
      <div className="text-xs text-gray-500 mb-2">Get it by Tomorrow</div>
      <button className="w-full bg-amazon-yellow hover:bg-amazon-yellow_hover text-sm py-1.5 rounded-md shadow-sm font-medium border border-amazon-secondary transition-colors">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
