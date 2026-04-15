const CustomerProfile = () => {
  return (
    <div className="max-w-300 mx-auto w-full p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-normal">Customer Profile</h1>
        <p className="text-sm text-gray-600">
          Manage your personal information and preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Personal Details Card */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-300">
              <h2 className="font-bold text-gray-700 uppercase tracking-wider text-xs">
                Personal Information
              </h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Full Name
                  </label>
                  <p className="font-medium">John Doe</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Email Address
                  </label>
                  <p className="font-medium">john.doe@example.com</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Phone Number
                  </label>
                  <p className="font-medium">+880 1711-000000</p>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">
                    Account Type
                  </label>
                  <p className="font-medium">Customer</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className="px-4 py-2 bg-amazon-yellow hover:bg-amazon-yellow_hover border border-amazon-secondary rounded-md text-sm font-bold shadow-sm transition-colors">
                  <i
                    data-lucide="pencil"
                    className="w-4 h-4 inline mr-2 text-gray-700"
                  ></i>
                  Edit Details
                </button>
              </div>
            </div>
          </div>

          {/* Shipping Addresses */}
          <div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-300 flex justify-between items-center">
              <h2 className="font-bold text-gray-700 uppercase tracking-wider text-xs">
                Default Address
              </h2>
            </div>
            <div className="p-6">
              <div className="flex gap-4 items-start">
                <i
                  data-lucide="map-pin"
                  className="w-5 h-5 text-gray-400 mt-1"
                ></i>
                <div>
                  <p className="font-bold text-sm mb-1">Home</p>
                  <p className="text-sm text-gray-600">
                    123 Main St, Apartment 4B
                    <br />
                    Dhaka, 1212
                    <br />
                    Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Side */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-300">
              <h2 className="font-bold text-gray-700 uppercase tracking-wider text-xs">
                Account Summary
              </h2>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <span className="text-sm text-gray-600">Total Orders</span>
                <span className="font-bold text-amazon-orange text-lg">12</span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <span className="text-sm text-gray-600">
                  Pending Deliveries
                </span>
                <span className="font-bold text-amazon-blue text-lg">1</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Reviews Written</span>
                <span className="font-bold text-gray-800 text-lg">4</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-3 border-b border-gray-300">
              <h2 className="font-bold text-gray-700 uppercase tracking-wider text-xs">
                Quick Links
              </h2>
            </div>
            <div className="p-4 flex flex-col gap-2">
              <a
                href="/orderlist"
                className="text-sm text-amazon-blue hover:text-amazon-orange hover:underline px-2 py-1"
              >
                View Order History
              </a>
              <a
                href="/cart"
                className="text-sm text-amazon-blue hover:text-amazon-orange hover:underline px-2 py-1"
              >
                Go to Cart
              </a>
              <div className="mt-2 pt-2 border-t border-gray-100">
                <button className="text-sm text-red-600 hover:underline px-2 py-1 font-medium">
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
