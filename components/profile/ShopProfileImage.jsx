const ShopProfileImage = () => {
  return (
    <div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
      <div className="bg-gray-50 px-6 py-3 border-b border-gray-300">
        <h2 className="font-bold text-gray-700 uppercase tracking-wider text-xs">
          Shop Banner Image
        </h2>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Current Banner</label>
          <div className="h-48 overflow-hidden bg-linear-to-br from-blue-50 to-blue-100 rounded-md border border-gray-300">
            <img
              src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600"
              className="w-full h-full object-cover"
              alt="Current Banner"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">
            Upload New Banner
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-8 text-center hover:border-amazon-blue transition-colors cursor-pointer">
            <i
              data-lucide="upload"
              className="w-12 h-12 mx-auto text-gray-400 mb-2"
            ></i>
            <p className="text-sm text-gray-600 mb-1">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-gray-500">
              PNG, JPG up to 5MB (Recommended: 1200 x 400 pixels)
            </p>

            <input
              type="file"
              name="logo"
              accept="image/*"
              className="hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProfileImage;
