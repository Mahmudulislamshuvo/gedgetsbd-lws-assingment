"use client";

import { editShopDetails } from "@/actions";
import { useEffect, useState } from "react";
import ShopProfileImage from "./ShopProfileImage";
import { useRouter } from "next/navigation";

const EditShopProfile = ({ shopId, shopDetails }) => {
  const [formData, setFormData] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (!shopDetails) return;

    setFormData({
      ...shopDetails,
      establishedYear: shopDetails.establishedYear
        ? String(shopDetails.establishedYear)
        : "",
      employeeCount: shopDetails.employeeCount
        ? String(shopDetails.employeeCount)
        : "",
      partnerships: Array.isArray(shopDetails.partnerships)
        ? shopDetails.partnerships.join(", ")
        : shopDetails.partnerships || "",
      website: shopDetails.website || "",
    });
  }, [shopDetails]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await editShopDetails(shopId, formData);

    if (res.success === true) {
      router.push("/profile");
    }
  };

  return (
    <div id="editMode">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* */}
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
                  name="name"
                  value={formData.name || ""}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">
                  Owner Name *
                </label>
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName || ""}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone || ""}
                  onChange={handleFormChange}
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
                name="description"
                value={formData.description || ""}
                onChange={handleFormChange}
                className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
              />
            </div>
          </div>
        </div>

        {/* */}
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
                <select
                  name="location"
                  value={formData.location || ""}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                >
                  <option value="Dhaka">Dhaka</option>
                  <option value="Chittagong">Chittagong</option>
                  <option value="Sylhet">Sylhet</option>
                  <option value="Rajshahi">Rajshahi</option>
                  <option value="Khulna">Khulna</option>
                  <option value="Barisal">Barisal</option>
                  <option value="Rangpur">Rangpur</option>
                  <option value="Mymensingh">Mymensingh</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">
                  Specialization *
                </label>
                <select
                  name="specialization"
                  value={formData.specialization || ""}
                  onChange={handleFormChange}
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                >
                  <option value="Laptops & PCs">Laptops & PCs</option>
                  <option value="Smartphones">Smartphones</option>
                  <option value="Gaming Gear">Gaming Gear</option>
                  <option value="Audio & Headphones">Audio & Headphones</option>
                  <option value="Cameras & Lenses">Cameras & Lenses</option>
                  <option value="Wearables">Wearables</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold mb-1">
                Full Address Bangladesh *
              </label>
              <textarea
                rows="2"
                name="address"
                value={formData.address || ""}
                placeholder="Eg: 123 Gulshan Avenue, Gulshan-1, Dhaka-1212,"
                onChange={handleFormChange}
                className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
              />
            </div>
          </div>
        </div>

        {/* Image sections */}
        <ShopProfileImage shopDetails={shopDetails} />

        {/*additionals details */}
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
                  name="establishedYear"
                  value={formData.establishedYear || ""}
                  onChange={handleFormChange}
                  placeholder="e.g., 2014"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">
                  Number of Employees
                </label>
                <input
                  type="number"
                  name="employeeCount"
                  value={formData.employeeCount || ""}
                  onChange={handleFormChange}
                  placeholder="e.g., 25"
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
                name="partnerships"
                placeholder="e.g., Apple, Dell, HP, Lenovo"
                value={formData.partnerships || ""}
                onChange={handleFormChange}
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
                name="website"
                placeholder="https://www.yourshop.com"
                value={formData.website || ""}
                onChange={handleFormChange}
                className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
              />
            </div>
          </div>
        </div>

        {/* action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-end pt-4">
          <button
            type="button"
            id="cancelEditBtn"
            onClick={() => router.push("/profile")}
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
  );
};

export default EditShopProfile;
