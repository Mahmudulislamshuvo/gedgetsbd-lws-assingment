"use client";

import { updateProfileData } from "@/actions";
import { useState } from "react";

const ShippingAddress = ({ userInfo }) => {
  const hasAddress = userInfo?.city || userInfo?.address?.district;
  const [isEditing, setIsEditing] = useState(!hasAddress);
  const [loading, setLoading] = useState(false);

  const address = userInfo?.address;
  const addressText = address
    ? [address.village, address.upazila, address.district]
        .filter(Boolean)
        .join(", ")
    : "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    // making a object to send to server action
    const updatedData = {
      phone: formData.get("phone"),
      address: {
        village: formData.get("village"),
        upazila: formData.get("upazila"),
        district: formData.get("district"),
      },
    };

    const result = await updateProfileData(userInfo.email, updatedData);

    if (result.success === true) {
      setIsEditing(false);
    } else {
      console.error(result.error);
      alert("Failed to update address!");
    }

    setLoading(false);
  };

  // ---------------- (Edit Mode) ----------------
  if (isEditing) {
    return (
      <div className="border-b border-gray-300 pb-6 mb-4">
        <div className="flex items-center mb-4">
          <span className="section-number mr-4">1</span>
          <span className="font-bold text-lg">Update Shipping Address</span>
        </div>

        <form onSubmit={handleSubmit} className="ml-10 grid gap-4 max-w-lg">
          <input
            type="text"
            name="phone"
            defaultValue={userInfo?.phone}
            placeholder="Phone Number"
            required
            className="border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-1 focus:ring-amazon-orange"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="village"
              defaultValue={address?.village}
              placeholder="Village / Street"
              className="border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-1"
            />
            <input
              type="text"
              name="upazila"
              defaultValue={address?.upazila}
              placeholder="Upazila / Thana"
              className="border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-1"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="district"
              defaultValue={address?.district}
              placeholder="District"
              required
              className="border border-gray-300 rounded p-2 text-sm focus:outline-none focus:ring-1"
            />
          </div>

          <div className="flex gap-4 mt-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-amazon-orange text-white px-4 py-2 rounded text-sm hover:bg-yellow-500"
            >
              {loading ? "Saving..." : "Save Address"}
            </button>

            {/* if address there then show cancel button */}
            {hasAddress && (
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="text-gray-600 hover:text-black text-sm"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }

  // ----------------  (View Mode) ----------------
  return (
    <div className="hover:bg-gray-50 border-b border-gray-300 pb-6 mb-4 flex justify-between items-start transition-colors">
      <div>
        <span className="section-number mr-4">1</span>
        <span className="font-bold text-lg">Shipping address</span>
      </div>
      <div className="text-sm flex-1 ml-10">
        <p className="font-medium">{userInfo?.name}</p>
        <p>{addressText}</p>
        <p>
          {userInfo?.city} {userInfo?.postalCode && `, ${userInfo?.postalCode}`}
        </p>
        <p className="mt-1 text-gray-600">Phone: {userInfo?.phone}</p>
      </div>
      <button
        onClick={() => setIsEditing(true)}
        className="text-amazon-blue text-xs hover:underline hover:text-amazon-orange"
      >
        Change
      </button>
    </div>
  );
};

export default ShippingAddress;
