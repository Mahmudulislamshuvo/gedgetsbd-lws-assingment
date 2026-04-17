"use client";

import { Pencil } from "lucide-react";
import { useState } from "react";

const CustomerPersonalDetailsCard = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [customerData, setCustomerData] = useState({});

  const handleUpdateCustomerInfo = () => {
    setIsEditing(false);
  };

  console.log(customerData);

  return (
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
              <input
                type="text"
                disabled={!isEditing}
                className="font-medium border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={customerData.fullName || "John Doe"}
                onChange={(e) =>
                  setCustomerData({ ...customerData, fullName: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Email Address
              </label>
              <input
                type="email"
                disabled={!isEditing}
                className="font-medium border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={customerData.email || "john.doe@example.com"}
                onChange={(e) =>
                  setCustomerData({ ...customerData, email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                disabled={!isEditing}
                className="font-medium border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={customerData.phone || "+880 1711-000000"}
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
                  onClick={handleUpdateCustomerInfo}
                  className="px-4 py-2 bg-amazon-yellow hover:bg-amazon-yellow_hover border border-amazon-secondary rounded-md text-sm font-bold shadow-sm transition-colors"
                >
                  <Pencil className="w-4 h-4 inline mr-2 text-gray-700" />
                  Update Changes
                </button>

                <button
                  onClick={() => setIsEditing(false)}
                  className="ml-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 border border-gray-300 rounded-md text-sm font-bold shadow-sm transition-colors"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
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
          <div className="flex gap-4 items-start">
            <i data-lucide="map-pin" className="w-5 h-5 text-gray-400 mt-1"></i>
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
  );
};

export default CustomerPersonalDetailsCard;
