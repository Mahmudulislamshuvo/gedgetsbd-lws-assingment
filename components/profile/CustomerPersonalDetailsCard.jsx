"use client";

import { updateProfileData } from "@/actions";
import { successToast } from "@/utils/toastify";
import { Pencil } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import CustomerProfileSkeliton from "../skelitons/CustomerProfileSkeliton";

const CustomerPersonalDetailsCard = ({ initialData }) => {
  const { data, status } = useSession();

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const buildCustomerData = (input) => ({
    name: input?.name || "",
    email: input?.email || "",
    phone: input?.phone || "",
    address: {
      village: input?.address?.village || "",
      upazila: input?.address?.upazila || "",
      district: input?.address?.district || "",
    },
  });

  const [customerData, setCustomerData] = useState(() =>
    buildCustomerData(initialData),
  );

  useEffect(() => {
    if (initialData) {
      setCustomerData(buildCustomerData(initialData));
    }
  }, [initialData]);

  const handleUpdateCustomerInfo = async (e) => {
    e.preventDefault();
    if (!isEditing) {
      return;
    }
    setIsSaving(true);
    const formData = new FormData(e.target);
    const updatedCustomerData = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      address: {
        village: formData.get("address.village"),
        upazila: formData.get("address.upazila"),
        district: formData.get("address.district"),
      },
    };

    try {
      const userEmail = data?.user?.email || customerData.email;
      const response = await updateProfileData(userEmail, updatedCustomerData);

      if (response.success) {
        successToast("Profile updated successfully!");
        setCustomerData(
          buildCustomerData(response.data || updatedCustomerData),
        );
        setIsEditing(false);
      }
    } finally {
      setIsSaving(false);
    }
  };

  if (status === "loading" && !initialData) {
    return <CustomerProfileSkeliton />;
  }

  return (
    <form
      onSubmit={handleUpdateCustomerInfo}
      className="lg:col-span-2 space-y-6"
    >
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
              <input
                type="text"
                name="name"
                disabled={!isEditing}
                className="font-medium border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={customerData.name || "John Doe"}
                onChange={(e) =>
                  setCustomerData({ ...customerData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                disabled={true}
                className="font-medium border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={
                  customerData.email ||
                  data?.user?.email ||
                  "john.doe@example.com"
                }
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                disabled={!isEditing}
                className="font-medium border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={customerData.phone || ""}
                onChange={(e) =>
                  setCustomerData({ ...customerData, phone: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Account Type
              </label>
              <p className="font-medium">Customer</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            {isEditing ? (
              <>
                <button
                  type="submit"
                  disabled={isSaving}
                  className="px-4 py-2 bg-amazon-yellow hover:bg-amazon-yellow_hover border border-amazon-secondary rounded-md text-sm font-bold shadow-sm transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSaving ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-700 border-t-transparent"></span>
                      Updating...
                    </span>
                  ) : (
                    <>
                      <Pencil className="w-4 h-4 inline mr-2 text-gray-700" />
                      Update Changes
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  disabled={isSaving}
                  className="ml-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 border border-gray-300 rounded-md text-sm font-bold shadow-sm transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setIsEditing(true);
                }}
                className="px-4 py-2 bg-amazon-yellow hover:bg-amazon-yellow_hover border border-amazon-secondary rounded-md text-sm font-bold shadow-sm transition-colors"
              >
                <Pencil className="w-4 h-4 inline mr-2 text-gray-700" />
                Edit Details
              </button>
            )}
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
          {isEditing ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Village/Street
                </label>
                <input
                  type="text"
                  name="address.village"
                  className="w-full font-medium border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={customerData.address?.village || ""}
                  onChange={(e) =>
                    setCustomerData({
                      ...customerData,
                      address: {
                        ...customerData.address,
                        village: e.target.value,
                      },
                    })
                  }
                  placeholder="e.g. 123 Main St"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Upazila/Thana
                </label>
                <input
                  type="text"
                  name="address.upazila"
                  className="w-full font-medium border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={customerData.address?.upazila || ""}
                  onChange={(e) =>
                    setCustomerData({
                      ...customerData,
                      address: {
                        ...customerData.address,
                        upazila: e.target.value,
                      },
                    })
                  }
                  placeholder="e.g. Gulshan"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  District
                </label>
                <input
                  type="text"
                  name="address.district"
                  className="w-full font-medium border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={customerData.address?.district || ""}
                  onChange={(e) =>
                    setCustomerData({
                      ...customerData,
                      address: {
                        ...customerData.address,
                        district: e.target.value,
                      },
                    })
                  }
                  placeholder="e.g. Dhaka"
                />
              </div>
            </div>
          ) : (
            <div className="flex gap-4 items-start">
              <i
                data-lucide="map-pin"
                className="w-5 h-5 text-gray-400 mt-1"
              ></i>
              <div>
                <p className="font-bold text-sm mb-1">Home</p>
                <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
                  {[
                    customerData.address?.village,
                    customerData.address?.upazila,
                    customerData.address?.district,
                  ]
                    .filter(Boolean)
                    .join(", ")}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default CustomerPersonalDetailsCard;
