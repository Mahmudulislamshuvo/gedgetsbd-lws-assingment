"use client";

import { addNewProducts, updateProduct } from "@/actions";
import ImageComponent from "./ImageComponent";
import ProductManageActionButton from "./PublishProductButton";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const ProductForm = ({ shopId, onClose, product }) => {
  const router = useRouter();
  const [imageResetKey, setImageResetKey] = useState(0);
  const [isNavigating, startTransition] = useTransition();
  const isEdit = Boolean(product?._id);
  const productId = product?._id ? String(product._id) : "";
  const addProductWithShopId = addNewProducts.bind(null, shopId);
  const updateProductWithId = updateProduct.bind(null, productId, shopId);
  const initialSpecs = product?.specifications ?? {};
  const initialImages = product?.images ?? {};

  const handleSubmit = async (formData) => {
    if (isEdit && !productId) return;

    const result = isEdit
      ? await updateProductWithId(formData)
      : await addProductWithShopId(formData);

    if (!isEdit && result?.success) {
      setImageResetKey((prev) => prev + 1);
    }

    startTransition(() => {
      if (onClose) {
        onClose();
      } else {
        router.replace("/managelist");
      }
    });
  };

  return (
    <div className="w-full p-6">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-normal">
            {isEdit ? "Edit Product" : "Add a Product"}
          </h1>
          <p className="text-sm text-gray-600">
            {isEdit
              ? "Update your product details."
              : "Create a new listing for your gadget product."}
          </p>
        </div>
      </div>

      <form action={handleSubmit} className="space-y-6">
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
                  defaultValue={product?.productName || ""}
                  className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Category</label>
                <select
                  name="category" // যুক্ত করা হয়েছে
                  defaultValue={product?.category}
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
                  defaultValue={product?.brand}
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
                  defaultValue={product?.condition}
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
                defaultValue={product?.description || ""}
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
                  defaultValue={product?.price ?? ""}
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
                  defaultValue={product?.stockQuantity ?? ""}
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
                  defaultValue={product?.sku || ""}
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
                  defaultValue={product?.availability}
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
                  defaultValue={product?.warrantyPeriod}
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
        <ImageComponent
          resetKey={imageResetKey}
          initialMainImage={initialImages?.mainImage || ""}
          initialAdditionalImages={initialImages?.additionalImages || []}
        />

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
                  defaultValue={initialSpecs?.processor || ""}
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
                  defaultValue={initialSpecs?.ram || ""}
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
                  defaultValue={initialSpecs?.storage || ""}
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
                  defaultValue={initialSpecs?.displaySize || ""}
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
                defaultValue={initialSpecs?.otherDetails || ""}
                className="w-full px-3 py-2 border border-gray-400 rounded-md outline-none focus:ring-1 focus:ring-amazon-blue focus:border-amazon-blue"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <ProductManageActionButton
          onClose={onClose}
          isNavigating={isNavigating}
          submitLabel={isEdit ? "Update Product" : "Publish Product"}
          pendingLabel={isEdit ? "Updating..." : "Publishing..."}
        />
      </form>
    </div>
  );
};

export default ProductForm;
