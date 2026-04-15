const RelatedProduct = () => {
  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      <h2 className="text-xl font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {/* <!-- Related Product 1 --> */}
        <a
          href="details.html"
          className="border border-gray-200 rounded p-3 hover:shadow-md transition"
        >
          <div className="bg-gray-50 h-32 flex items-center justify-center mb-2">
            <img
              src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=200"
              className="h-full object-cover"
            />
          </div>
          <p className="text-sm text-amazon-blue hover:text-amazon-orange line-clamp-2 mb-1">
            Apple MacBook Air M2
          </p>
          <p className="text-sm font-bold">৳1,35,000</p>
        </a>

        {/* <!-- Related Product 2 --> */}
        <a
          href="details.html"
          className="border border-gray-200 rounded p-3 hover:shadow-md transition"
        >
          <div className="bg-gray-50 h-32 flex items-center justify-center mb-2">
            <img
              src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=200"
              className="h-full object-cover"
            />
          </div>
          <p className="text-sm text-amazon-blue hover:text-amazon-orange line-clamp-2 mb-1">
            Dell XPS 15 Laptop
          </p>
          <p className="text-sm font-bold">৳1,85,000</p>
        </a>

        {/* <!-- Related Product 3 --> */}
        <a
          href="details.html"
          className="border border-gray-200 rounded p-3 hover:shadow-md transition"
        >
          <div className="bg-gray-50 h-32 flex items-center justify-center mb-2">
            <img
              src="https://images.unsplash.com/photo-1527690710675-4ae7d334803b?w=200"
              className="h-full object-cover"
            />
          </div>
          <p className="text-sm text-amazon-blue hover:text-amazon-orange line-clamp-2 mb-1">
            Magic Keyboard
          </p>
          <p className="text-sm font-bold">৳12,500</p>
        </a>

        {/* <!-- Related Product 4 --> */}
        <a
          href="details.html"
          className="border border-gray-200 rounded p-3 hover:shadow-md transition"
        >
          <div className="bg-gray-50 h-32 flex items-center justify-center mb-2">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200"
              className="h-full object-cover"
            />
          </div>
          <p className="text-sm text-amazon-blue hover:text-amazon-orange line-clamp-2 mb-1">
            Magic Mouse
          </p>
          <p className="text-sm font-bold">৳8,500</p>
        </a>

        {/* <!-- Related Product 5 --> */}
        <a
          href="details.html"
          className="border border-gray-200 rounded p-3 hover:shadow-md transition"
        >
          <div className="bg-gray-50 h-32 flex items-center justify-center mb-2">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200"
              className="h-full object-cover"
            />
          </div>
          <p className="text-sm text-amazon-blue hover:text-amazon-orange line-clamp-2 mb-1">
            AirPods Pro
          </p>
          <p className="text-sm font-bold">৳28,500</p>
        </a>

        {/* <!-- Related Product 6 --> */}
        <a
          href="details.html"
          className="border border-gray-200 rounded p-3 hover:shadow-md transition"
        >
          <div className="bg-gray-50 h-32 flex items-center justify-center mb-2">
            <img
              src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=200"
              className="h-full object-cover"
            />
          </div>
          <p className="text-sm text-amazon-blue hover:text-amazon-orange line-clamp-2 mb-1">
            Apple Watch Series 9
          </p>
          <p className="text-sm font-bold">৳45,000</p>
        </a>
      </div>
    </div>
  );
};

export default RelatedProduct;
