import React from "react";

const CreateProductPage = () => {
  return (
    <>
      <div class="max-w-250 mx-auto w-full p-6">
        <div class="mb-8 flex justify-between items-end">
          <div>
            <h1 class="text-3xl font-normal">Add a Product</h1>
            <p class="text-sm text-gray-600">
              Create a new listing for your gadget product.
            </p>
          </div>
          <a
            href="manageList.html"
            class="text-amazon-blue hover:underline text-sm flex items-center gap-1"
          >
            <i data-lucide="arrow-left" class="w-4 h-4"></i> Back to Manage List
          </a>
        </div>

        <form
          action="#"
          method="POST"
          enctype="multipart/form-data"
          class="space-y-6"
        >
          {/* <!-- Step 1: Product Identity --> */}
          <div class="bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
            <div class="bg-gray-50 px-6 py-3 border-b border-gray-300">
              <h2 class="font-bold text-gray-700 uppercase tracking-wider text-xs">
                Step 1: Product Identity
              </h2>
            </div>
            <div class="p-6 space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-bold mb-1">
                    Product Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Apple MacBook Pro M2 - 16GB RAM"
                    class="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                  />
                </div>
                <div>
                  <label class="block text-sm font-bold mb-1">Category</label>
                  <select class="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue">
                    <option>Laptops & Computers</option>
                    <option>Smartphones & Tablets</option>
                    <option>Audio & Headphones</option>
                    <option>Gaming Accessories</option>
                    <option>Cameras & Photography</option>
                    <option>Wearables & Smartwatches</option>
                  </select>
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-bold mb-1">Brand</label>
                  <select class="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue">
                    <option>Apple</option>
                    <option>Samsung</option>
                    <option>Dell</option>
                    <option>HP</option>
                    <option>Lenovo</option>
                    <option>Sony</option>
                    <option>Razer</option>
                    <option>Logitech</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-bold mb-1">Condition</label>
                  <select class="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue">
                    <option>New</option>
                    <option>Renewed</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-sm font-bold mb-1">Description</label>
                <textarea
                  rows="4"
                  placeholder="Describe your product features, specifications, and benefits..."
                  class="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                ></textarea>
              </div>
            </div>
          </div>

          {/* <!-- Step 2: Pricing & Inventory --> */}
          <div class="bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
            <div class="bg-gray-50 px-6 py-3 border-b border-gray-300">
              <h2 class="font-bold text-gray-700 uppercase tracking-wider text-xs">
                Step 2: Pricing & Inventory
              </h2>
            </div>
            <div class="p-6 space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label class="block text-sm font-bold mb-1">Price (৳)</label>
                  <input
                    type="number"
                    placeholder="0.00"
                    class="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                  />
                </div>
                <div>
                  <label class="block text-sm font-bold mb-1">
                    Stock Quantity
                  </label>
                  <input
                    type="number"
                    placeholder="0"
                    class="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                  />
                </div>
                <div>
                  <label class="block text-sm font-bold mb-1">
                    SKU (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., MBP-M2-16-1TB"
                    class="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                  />
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-bold mb-1">
                    Availability
                  </label>
                  <select class="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue">
                    <option>In Stock</option>
                    <option>Pre-Order</option>
                    <option>Out of Stock</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-bold mb-1">
                    Warranty Period
                  </label>
                  <select class="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue">
                    <option>No Warranty</option>
                    <option>6 Months</option>
                    <option>1 Year</option>
                    <option>2 Years</option>
                    <option>3 Years</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Step 3: Product Images --> */}
          <div class="bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
            <div class="bg-gray-50 px-6 py-3 border-b border-gray-300">
              <h2 class="font-bold text-gray-700 uppercase tracking-wider text-xs">
                Step 3: Product Images
              </h2>
            </div>
            <div class="p-6 space-y-4">
              <div>
                <label class="block text-sm font-bold mb-1">
                  Main Product Image
                </label>
                <div class="border-2 border-dashed border-gray-300 rounded-md p-8 text-center hover:border-amazon-blue transition-colors cursor-pointer">
                  <i
                    data-lucide="upload"
                    class="w-12 h-12 mx-auto text-gray-400 mb-2"
                  ></i>
                  <p class="text-sm text-gray-600 mb-1">
                    Click to upload or drag and drop
                  </p>
                  <p class="text-xs text-gray-500">PNG, JPG up to 5MB</p>
                  <input type="file" accept="image/*" class="hidden" />
                </div>
              </div>
              <div>
                <label class="block text-sm font-bold mb-1">
                  Additional Images (Optional)
                </label>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div class="border-2 border-dashed border-gray-300 rounded-md p-4 text-center hover:border-amazon-blue transition-colors cursor-pointer aspect-square flex items-center justify-center">
                    <i data-lucide="plus" class="w-8 h-8 text-gray-400"></i>
                  </div>
                  <div class="border-2 border-dashed border-gray-300 rounded-md p-4 text-center hover:border-amazon-blue transition-colors cursor-pointer aspect-square flex items-center justify-center">
                    <i data-lucide="plus" class="w-8 h-8 text-gray-400"></i>
                  </div>
                  <div class="border-2 border-dashed border-gray-300 rounded-md p-4 text-center hover:border-amazon-blue transition-colors cursor-pointer aspect-square flex items-center justify-center">
                    <i data-lucide="plus" class="w-8 h-8 text-gray-400"></i>
                  </div>
                  <div class="border-2 border-dashed border-gray-300 rounded-md p-4 text-center hover:border-amazon-blue transition-colors cursor-pointer aspect-square flex items-center justify-center">
                    <i data-lucide="plus" class="w-8 h-8 text-gray-400"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Step 4: Specifications --> */}
          <div class="bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
            <div class="bg-gray-50 px-6 py-3 border-b border-gray-300">
              <h2 class="font-bold text-gray-700 uppercase tracking-wider text-xs">
                Step 4: Technical Specifications (Optional)
              </h2>
            </div>
            <div class="p-6 space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-bold mb-1">
                    Processor/Chipset
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Apple M2 Max"
                    class="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                  />
                </div>
                <div>
                  <label class="block text-sm font-bold mb-1">RAM/Memory</label>
                  <input
                    type="text"
                    placeholder="e.g., 32GB"
                    class="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                  />
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-bold mb-1">Storage</label>
                  <input
                    type="text"
                    placeholder="e.g., 1TB SSD"
                    class="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                  />
                </div>
                <div>
                  <label class="block text-sm font-bold mb-1">
                    Display Size
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., 16 inch"
                    class="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                  />
                </div>
              </div>
              <div>
                <label class="block text-sm font-bold mb-1">
                  Other Specifications
                </label>
                <textarea
                  rows="3"
                  placeholder="Add any other technical details (Battery life, Connectivity, Ports, etc.)"
                  class="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                ></textarea>
              </div>
            </div>
          </div>

          {/* <!-- Action Buttons --> */}
          <div class="flex flex-col sm:flex-row gap-4 justify-end pt-4">
            <button
              type="button"
              onclick="window.location.href = 'manageList.html'"
              class="px-6 py-2 border border-gray-400 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>

            <button
              type="submit"
              class="px-6 py-2 bg-amazon-yellow hover:bg-amazon-yellow_hover border border-amazon-secondary rounded-md text-sm font-bold shadow-sm transition-colors"
            >
              Publish Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProductPage;
