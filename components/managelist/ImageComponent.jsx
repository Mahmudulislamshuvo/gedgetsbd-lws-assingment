"use client";

import { Plus, Upload, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ImageComponent = () => {
  const [mainImagePreview, setMainImagePreview] = useState(null);
  const [additionalImagePreviews, setAdditionalImagePreviews] = useState([]);

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setMainImagePreview(URL.createObjectURL(file));
    }
  };

  const handleAdditionalImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newPreviews = [...additionalImagePreviews];
      newPreviews[index] = URL.createObjectURL(file);
      setAdditionalImagePreviews(newPreviews);
    }
  };

  const removeMainImage = (e) => {
    e.preventDefault();
    setMainImagePreview(null);
  };

  const removeAdditionalImage = (e, index) => {
    e.preventDefault();
    const newPreviews = [...additionalImagePreviews];
    newPreviews[index] = null;
    setAdditionalImagePreviews(newPreviews);
  };

  return (
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
          {mainImagePreview ? (
            <div className="relative w-full h-full">
              {/* যদি ইমেজ থাকে, তাহলে ইমেজ দেখাবে */}
              <Image
                src={mainImagePreview}
                alt="Main Preview"
                className="w-full h-full object-contain"
                height={320}
                width={320}
              />
              <button
                onClick={removeMainImage}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
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
                onChange={handleMainImageChange}
                required
              />
            </div>
          )}
        </div>

        {/* Additional Images */}
        <div>
          <label className="block text-sm font-bold mb-1">
            Additional Images (Optional)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center hover:border-amazon-blue transition-colors aspect-square flex items-center justify-center relative overflow-hidden"
              >
                {additionalImagePreviews[index] ? (
                  <div className="relative w-full h-full">
                    {/* ছবি থাকলে দেখাবে */}
                    <img
                      src={additionalImagePreviews[index]}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={(e) => removeAdditionalImage(e, index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ) : (
                  <>
                    {/* ছবি না থাকলে প্লাস আইকন দেখাবে */}
                    <Plus className="w-8 h-8 text-gray-400" />
                    <input
                      type="file"
                      name="additionalImages"
                      accept="image/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      onChange={(e) => handleAdditionalImageChange(e, index)} // ইভেন্টটি যুক্ত করুন
                    />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
