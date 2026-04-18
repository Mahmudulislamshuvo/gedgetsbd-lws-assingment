import React from "react";
import Link from "next/link";
import { Plus, Upload } from "lucide-react";
import { addNewProducts } from "@/actions";

const ProductForm = ({ shopId, onClose }) => {
  const addProductWithShopId = addNewProducts.bind(null, shopId);

  console.log("Product from", shopId);

  return (
    <div className="w-full p-6">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-normal">Add a Product</h1>
          <p className="text-sm text-gray-600">
            Create a new listing for your gadget product.
          </p>
        </div>
      </div>

      <form action={addProductWithShopId} className="space-y-6">
        {/* <input type="hidden" name="shopId" value={shopId} /> */}
        {/* Step 1: Product Identity */}
        <div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-300">
            <h2 className="font-bold text-gray-700 uppercase tracking-wider text-xs">
              Step 1: Product Identity
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  name="productName" // যুক্ত করা হয়েছে
                  placeholder="e.g., Apple MacBook Pro M2 - 16GB RAM"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Category</label>
                <select
                  name="category" // যুক্ত করা হয়েছে
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                >
                  <option value="Laptops & Computers">
                    Laptops & Computers
                  </option>
                  <option value="Smartphones & Tablets">
                    Smartphones & Tablets
                  </option>
                  <option value="Audio & Headphones">Audio & Headphones</option>
                  <option value="Gaming Accessories">Gaming Accessories</option>
                  <option value="Cameras & Photography">
                    Cameras & Photography
                  </option>
                  <option value="Wearables & Smartwatches">
                    Wearables & Smartwatches
                  </option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-1">Brand</label>
                <select
                  name="brand"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                >
                  <option value="Apple">Apple</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Dell">Dell</option>
                  <option value="HP">HP</option>
                  <option value="Lenovo">Lenovo</option>
                  <option value="Sony">Sony</option>
                  <option value="Razer">Razer</option>
                  <option value="Logitech">Logitech</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">
                  Condition
                </label>
                <select
                  name="condition"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                >
                  <option value="New">New</option>
                  <option value="Renewed">Renewed</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">
                Description
              </label>
              <textarea
                name="description"
                rows="4"
                placeholder="Describe your product features, specifications, and benefits..."
                className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                required
              ></textarea>
            </div>
          </div>
        </div>

        {/* Step 2: Pricing & Inventory */}
        <div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-300">
            <h2 className="font-bold text-gray-700 uppercase tracking-wider text-xs">
              Step 2: Pricing & Inventory
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold mb-1">
                  Price (৳)
                </label>
                <input
                  type="number"
                  name="price"
                  step="0.01"
                  placeholder="0.00"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  name="stockQuantity"
                  placeholder="0"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">
                  SKU (Optional)
                </label>
                <input
                  type="text"
                  name="sku"
                  placeholder="e.g., MBP-M2-16-1TB"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-1">
                  Availability
                </label>
                <select
                  name="availability"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                >
                  <option value="In Stock">In Stock</option>
                  <option value="Pre-Order">Pre-Order</option>
                  <option value="Out of Stock">Out of Stock</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">
                  Warranty Period
                </label>
                <select
                  name="warrantyPeriod"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                >
                  <option value="No Warranty">No Warranty</option>
                  <option value="6 Months">6 Months</option>
                  <option value="1 Year">1 Year</option>
                  <option value="2 Years">2 Years</option>
                  <option value="3 Years">3 Years</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Product Images */}
        <div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-300">
            <h2 className="font-bold text-gray-700 uppercase tracking-wider text-xs">
              Step 3: Product Images
            </h2>
          </div>
          <div className="p-6 space-y-4">
            {/* Main Image */}
            <div>
              <label className="block text-sm font-bold mb-1">
                Main Product Image
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-md p-8 text-center hover:border-amazon-blue transition-colors cursor-pointer relative">
                <Upload className="w-12 h-12 mx-auto text-gray-400 mb-2" />

                <p className="text-sm text-gray-600 mb-1">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>

                <input
                  type="file"
                  name="mainImage"
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  //   required
                />
              </div>
            </div>

            {/* Additional Images */}
            <div>
              <label className="block text-sm font-bold mb-1">
                Additional Images (Optional)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <div
                    key={index}
                    className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center hover:border-amazon-blue transition-colors cursor-pointer aspect-square flex items-center justify-center relative"
                  >
                    <Plus className="w-8 h-8 text-gray-400" />

                    <input
                      type="file"
                      name="additionalImages"
                      accept="image/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Step 4: Specifications */}
        <div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-300">
            <h2 className="font-bold text-gray-700 uppercase tracking-wider text-xs">
              Step 4: Technical Specifications (Optional)
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-1">
                  Processor/Chipset
                </label>
                <input
                  type="text"
                  name="processor"
                  placeholder="e.g., Apple M2 Max"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">
                  RAM/Memory
                </label>
                <input
                  type="text"
                  name="ram"
                  placeholder="e.g., 32GB"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-1">Storage</label>
                <input
                  type="text"
                  name="storage"
                  placeholder="e.g., 1TB SSD"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">
                  Display Size
                </label>
                <input
                  type="text"
                  name="displaySize"
                  placeholder="e.g., 16 inch"
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">
                Other Specifications
              </label>
              <textarea
                rows="3"
                name="specifications"
                placeholder="Add any other technical details (Battery life, Connectivity, Ports, etc.)"
                className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-end pt-4">
          {onClose ? (
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-400 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors text-center"
            >
              Cancel
            </button>
          ) : (
            <Link
              href="/managelist"
              className="px-6 py-2 border border-gray-400 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors text-center"
            >
              Cancel
            </Link>
          )}

          <button
            type="submit"
            className="px-6 py-2 bg-amazon-yellow hover:bg-amazon-yellow_hover border border-amazon-secondary rounded-md text-sm font-bold shadow-sm transition-colors"
          >
            Publish Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
