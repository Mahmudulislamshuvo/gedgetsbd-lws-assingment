import { EyeOffIcon, PencilIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import React from "react";

const ManageListPage = () => {
  return (
    <div className="w-full p-6">
      <div className="max-w-375 mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-normal">Manage Inventory</h1>
          <Link
            href="/managelist/create"
            className="bg-amazon-yellow hover:bg-amazon-yellow_hover px-6 py-2 rounded-md text-sm font-bold shadow-sm border border-amazon-secondary transition-colors"
          >
            Add a Product
          </Link>
        </div>

        {/* <!-- Filters --> */}
        <div className="bg-white border border-gray-300 rounded shadow-sm p-4 mb-6 flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-bold">Status:</span>
            <select className="border border-gray-300 py-1 px-2 rounded outline-none focus:ring-1 focus:ring-amazon-blue">
              <option>All</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div className="flex items-center gap-2 border-l border-gray-300 pl-4">
            <span className="font-bold">Category:</span>
            <select className="border border-gray-300 py-1 px-2 rounded outline-none focus:ring-1 focus:ring-amazon-blue">
              <option>All Categories</option>
              <option>Laptops & Computers</option>
              <option>Smartphones & Tablets</option>
              <option>Audio & Headphones</option>
              <option>Gaming Accessories</option>
              <option>Cameras & Photography</option>
              <option>Wearables & Smartwatches</option>
            </select>
          </div>
          <div className="flex items-center gap-2 border-l border-gray-300 pl-4">
            <span className="font-bold">Brand:</span>
            <select className="border border-gray-300 py-1 px-2 rounded outline-none focus:ring-1 focus:ring-amazon-blue">
              <option>All Brands</option>
              <option>Apple</option>
              <option>Samsung</option>
              <option>Dell</option>
              <option>HP</option>
              <option>Lenovo</option>
              <option>Sony</option>
              <option>Razer</option>
            </select>
          </div>
          <div className="flex-1 flex items-center gap-2 border-l border-gray-300 pl-4">
            <div className="relative w-full max-w-sm">
              <i
                data-lucide="search"
                className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-gray-400"
              ></i>
              <input
                type="text"
                placeholder="Search by SKU or Name"
                className="w-full pl-8 pr-2 py-1 border border-gray-300 rounded outline-none focus:ring-1 focus:ring-amazon-blue"
              />
            </div>
          </div>
        </div>

        {/* <!-- Table --> */}
        <div className="bg-white border border-gray-300 rounded shadow-sm overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-100 border-b border-gray-300 text-gray-600 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-3 text-center w-12">
                  <input type="checkbox" />
                </th>
                <th className="p-3">Status</th>
                <th className="p-3">Image</th>
                <th className="p-3">Product Name</th>
                <th className="p-3">Category</th>
                <th className="p-3">Brand</th>
                <th className="p-3">Price (৳)</th>
                <th className="p-3">Available</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {/* <!-- Product 1 --> */}
              <tr className="hover:bg-gray-50">
                <td className="p-3 text-center">
                  <input type="checkbox" />
                </td>
                <td className="p-3">
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">
                    In Stock
                  </span>
                </td>
                <td className="p-3">
                  <img
                    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100"
                    className="w-12 h-12 object-cover rounded border border-gray-200"
                  />
                </td>
                <td className="p-3">
                  <div className="font-medium">
                    Apple MacBook Pro 16" M2 Max
                  </div>
                  <div className="text-xs text-gray-500">
                    SKU: MBP-M2-16-1TB
                  </div>
                </td>
                <td className="p-3 text-gray-600">Laptops & Computers</td>
                <td className="p-3 text-gray-600">Apple</td>
                <td className="p-3 font-bold">3,45,000</td>
                <td className="p-3">
                  <span className="text-green-600 font-bold">24</span>
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      className="p-1.5 hover:bg-gray-100 rounded"
                      title="Edit"
                    >
                      <PencilIcon className="w-4 h-4 text-amazon-blue" />
                    </button>
                    <button
                      className="p-1.5 hover:bg-gray-100 rounded"
                      title="Unpublish"
                    >
                      <EyeOffIcon className="w-4 h-4 text-gray-600" />
                    </button>
                    <button
                      className="p-1.5 hover:bg-gray-100 rounded"
                      title="Delete"
                    >
                      <Trash2Icon className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>

              {/* <!-- Product 3 --> */}
              <tr className="hover:bg-gray-50">
                <td className="p-3 text-center">
                  <input type="checkbox" />
                </td>
                <td className="p-3">
                  <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold rounded">
                    Low Stock
                  </span>
                </td>
                <td className="p-3">
                  <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100"
                    className="w-12 h-12 object-cover rounded border border-gray-200"
                  />
                </td>
                <td className="p-3">
                  <div className="font-medium">Sony WH-1000XM5 Headphones</div>
                  <div className="text-xs text-gray-500">
                    SKU: SONY-WH1000XM5
                  </div>
                </td>
                <td className="p-3 text-gray-600">Audio & Headphones</td>
                <td className="p-3 text-gray-600">Sony</td>
                <td className="p-3 font-bold">38,500</td>
                <td className="p-3">
                  <span className="text-yellow-600 font-bold">3</span>
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      className="p-1.5 hover:bg-gray-100 rounded"
                      title="Edit"
                    >
                      <i
                        data-lucide="pencil"
                        className="w-4 h-4 text-amazon-blue"
                      ></i>
                    </button>
                    <button
                      className="p-1.5 hover:bg-gray-100 rounded"
                      title="Unpublish"
                    >
                      <i
                        data-lucide="eye-off"
                        className="w-4 h-4 text-gray-600"
                      ></i>
                    </button>
                    <button
                      className="p-1.5 hover:bg-gray-100 rounded"
                      title="Delete"
                    >
                      <i
                        data-lucide="trash-2"
                        className="w-4 h-4 text-red-600"
                      ></i>
                    </button>
                  </div>
                </td>
              </tr>

              {/* <!-- Product 5 --> */}
              <tr className="hover:bg-gray-50">
                <td className="p-3 text-center">
                  <input type="checkbox" />
                </td>
                <td className="p-3">
                  <span className="inline-block px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded">
                    Out of Stock
                  </span>
                </td>
                <td className="p-3">
                  <img
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100"
                    className="w-12 h-12 object-cover rounded border border-gray-200"
                  />
                </td>
                <td className="p-3">
                  <div className="font-medium">
                    Logitech G502 Hero Gaming Mouse
                  </div>
                  <div className="text-xs text-gray-500">
                    SKU: LOG-G502-HERO
                  </div>
                </td>
                <td className="p-3 text-gray-600">Gaming Accessories</td>
                <td className="p-3 text-gray-600">Logitech</td>
                <td className="p-3 font-bold">8,500</td>
                <td className="p-3">
                  <span className="text-red-600 font-bold">0</span>
                </td>
                <td className="p-3">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      className="p-1.5 hover:bg-gray-100 rounded"
                      title="Edit"
                    >
                      <i
                        data-lucide="pencil"
                        className="w-4 h-4 text-amazon-blue"
                      ></i>
                    </button>
                    <button
                      className="p-1.5 hover:bg-gray-100 rounded"
                      title="Publish"
                    >
                      <i
                        data-lucide="eye"
                        className="w-4 h-4 text-gray-600"
                      ></i>
                    </button>
                    <button
                      className="p-1.5 hover:bg-gray-100 rounded"
                      title="Delete"
                    >
                      <i
                        data-lucide="trash-2"
                        className="w-4 h-4 text-red-600"
                      ></i>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- Pagination --> */}
        <div className="mt-6 flex items-center justify-between text-sm text-gray-600">
          <div>Showing 1-5 of 5 products</div>
          <div className="flex gap-2">
            <button
              className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
              disabled
            >
              Previous
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded bg-amazon-yellow font-bold">
              1
            </button>
            <button
              className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
              disabled
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageListPage;
