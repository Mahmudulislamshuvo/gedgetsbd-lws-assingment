const CategoryGridCard = () => {
  return (
    <div className="bg-white p-4 flex flex-col gap-4 shadow-sm z-20">
      <h2 className="text-xl font-bold">Laptops & PCs</h2>
      <div className="grid grid-cols-2 gap-2 h-full">
        <img
          src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300"
          className="w-full h-full object-cover mb-1"
        />
        <img
          src="https://images.unsplash.com/photo-1675868374786-3edd36dddf04?w=300"
          className="w-full h-full object-cover mb-1"
        />
        <img
          src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300"
          className="w-full h-full object-cover mb-1"
        />
        <img
          src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=300"
          className="w-full h-full object-cover mb-1"
        />
      </div>
      <a
        href="products.html"
        className="text-amazon-blue text-sm hover:underline hover:text-red-700 mt-auto"
      >
        See all laptops
      </a>
    </div>
  );
};

export default CategoryGridCard;
