import React from "react";

const ShopProfile = () => {
  return (
    <div className="max-w-300 mx-auto w-full p-6">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-normal">Shop Profile</h1>
          <p className="text-sm text-gray-600">
            Manage your shop information and appearance on Gadgets BD
          </p>
        </div>
        <div className="flex gap-2">
          <button
            id="viewModeBtn"
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-300 transition-colors"
          >
            <i data-lucide="eye" className="w-4 h-4 inline mr-1"></i>
            View Mode
          </button>
          <button
            id="editModeBtn"
            className="px-4 py-2 bg-amazon-yellow hover:bg-amazon-yellow_hover border border-amazon-secondary rounded-md text-sm font-bold transition-colors"
          >
            <i data-lucide="pencil" className="w-4 h-4 inline mr-1"></i>
            Edit Mode
          </button>
        </div>
      </div>

      {/* <!-- View Mode --> */}
      <div id="viewMode" className="space-y-6">
        {/* <!-- Shop Preview Card --> */}
        <div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-300 flex justify-between items-center">
            <h2 className="font-bold text-gray-700 uppercase tracking-wider text-xs">
              Shop Preview
            </h2>
            <span className="flex items-center bg-green-50 px-2 py-1 rounded border border-green-200">
              <i
                data-lucide="check-circle"
                className="w-3 h-3 text-green-600 mr-1"
              ></i>
              <span className="text-[10px] font-bold text-green-700 uppercase">
                Verified
              </span>
            </span>
          </div>
          <div className="p-6">
            {/* <!-- Shop Card Preview --> */}
            <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-sm overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden bg-linear-to-br from-blue-50 to-blue-100">
                <img
                  id="previewBanner"
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600"
                  className="w-full h-full object-cover"
                  alt="Shop Banner"
                />
              </div>
              <div className="p-4">
                <h3
                  id="previewName"
                  className="font-bold text-lg text-amazon-blue mb-1"
                >
                  Tech Hub BD
                </h3>
                <p id="previewLocation" className="text-sm text-gray-500 mb-3">
                  Dhaka, Bangladesh
                </p>

                <div className="flex items-center gap-1 mb-3">
                  <div className="flex text-amazon-secondary">
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                    <i data-lucide="star" className="w-4 h-4 fill-current"></i>
                  </div>
                  <span
                    id="previewRatings"
                    className="text-xs text-amazon-blue"
                  >
                    3,240 ratings
                  </span>
                </div>

                <p
                  id="previewDescription"
                  className="text-sm text-gray-700 mb-4"
                >
                  Leading retailer of laptops, computers, and accessories.
                  Official partner of Apple, Dell, and HP with 10+ years of
                  experience.
                </p>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="text-xs">
                    <span className="text-gray-500">Specializes in:</span>
                    <span id="previewSpecialization" className="font-bold">
                      Laptops & PCs
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Shop Details --> */}
        <div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-300">
            <h2 className="font-bold text-gray-700 uppercase tracking-wider text-xs">
              Shop Information
            </h2>
          </div>
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Shop Name
              </label>
              <p className="font-medium">Tech Hub BD</p>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Owner Name
              </label>
              <p className="font-medium">Kamal Hossain</p>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Email</label>
              <p className="font-medium">techhub@gadgetsbd.com</p>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Phone Number
              </label>
              <p className="font-medium">+880 1712-345678</p>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Location
              </label>
              <p className="font-medium">Dhaka, Bangladesh</p>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Specialization
              </label>
              <p className="font-medium">Laptops & PCs</p>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs text-gray-500 mb-1">
                Shop Description
              </label>
              <p className="font-medium">
                Leading retailer of laptops, computers, and accessories.
                Official partner of Apple, Dell, and HP with 10+ years of
                experience.
              </p>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs text-gray-500 mb-1">
                Address
              </label>
              <p className="font-medium">
                123 Gulshan Avenue, Gulshan-1, Dhaka-1212, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Edit Mode --> */}
      <div id="editMode" className="hidden">
        <form className="space-y-6">
          {/* <!-- Basic Information --> */}
          <div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-300">
              <h2 className="font-bold text-gray-700 uppercase tracking-wider text-xs">
                Basic Information
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-1">
                    Shop Name *
                  </label>
                  <input
                    type="text"
                    value="Tech Hub BD"
                    className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">
                    Owner Name *
                  </label>
                  <input
                    type="text"
                    value="Kamal Hossain"
                    className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    value="techhub@gadgetsbd.com"
                    className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value="+880 1712-345678"
                    className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">
                  Shop Description *
                </label>
                <textarea
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                >
                  Leading retailer of laptops, computers, and accessories.
                  Official partner of Apple, Dell, and HP with 10+ years of
                  experience.
                </textarea>
              </div>
            </div>
          </div>

          {/* <!-- Location & Specialization --> */}
          <div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-300">
              <h2 className="font-bold text-gray-700 uppercase tracking-wider text-xs">
                Location & Specialization
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-1">
                    City/Location *
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue">
                    <option selected>Dhaka</option>
                    <option>Chittagong</option>
                    <option>Sylhet</option>
                    <option>Rajshahi</option>
                    <option>Khulna</option>
                    <option>Barisal</option>
                    <option>Rangpur</option>
                    <option>Mymensingh</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">
                    Specialization *
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue">
                    <option selected>Laptops & PCs</option>
                    <option>Smartphones</option>
                    <option>Gaming Gear</option>
                    <option>Audio & Headphones</option>
                    <option>Cameras & Lenses</option>
                    <option>Wearables</option>
                    <option>Accessories</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">
                  Full Address *
                </label>
                <textarea
                  rows="2"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                >
                  123 Gulshan Avenue, Gulshan-1, Dhaka-1212, Bangladesh
                </textarea>
              </div>
            </div>
          </div>

          {/* <!-- Shop Banner --> */}
          <div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-300">
              <h2 className="font-bold text-gray-700 uppercase tracking-wider text-xs">
                Shop Banner Image
              </h2>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">
                  Current Banner
                </label>
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
                  <input type="file" accept="image/*" className="hidden" />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Additional Information --> */}
          <div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-300">
              <h2 className="font-bold text-gray-700 uppercase tracking-wider text-xs">
                Additional Information
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-1">
                    Year Established
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 2014"
                    value="2014"
                    className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-1">
                    Number of Employees
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 25"
                    value="25"
                    className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">
                  Official Brand Partnerships (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g., Apple, Dell, HP, Lenovo"
                  value="Apple, Dell, HP, Lenovo"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Separate multiple brands with commas
                </p>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">
                  Website URL (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://www.yourshop.com"
                  value="https://www.techhubbd.com"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                />
              </div>
            </div>
          </div>

          {/* <!-- Action Buttons --> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-end pt-4">
            <button
              type="button"
              id="cancelEditBtn"
              className="px-6 py-2 border border-gray-400 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-amazon-yellow hover:bg-amazon-yellow_hover border border-amazon-secondary rounded-md text-sm font-bold shadow-sm transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShopProfile;
