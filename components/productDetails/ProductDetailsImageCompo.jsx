const ProductDetailsImageCompo = () => {
  return (
    <div class="lg:col-span-5 flex gap-4">
      <div class="flex flex-col gap-2">
        <button class="w-10 h-10 border border-amazon-secondary rounded overflow-hidden hover:shadow-md">
          <img
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=100"
            class="w-full h-full object-cover"
          />
        </button>
        <button class="w-10 h-10 border border-gray-300 rounded overflow-hidden hover:shadow-md">
          <img
            src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=100"
            class="w-full h-full object-cover"
          />
        </button>
        <button class="w-10 h-10 border border-gray-300 rounded overflow-hidden hover:shadow-md">
          <img
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=100"
            class="w-full h-full object-cover"
          />
        </button>
      </div>
      <div class="flex-1 border border-gray-200 rounded p-4 bg-gray-50">
        <img
          src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600"
          class="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default ProductDetailsImageCompo;
