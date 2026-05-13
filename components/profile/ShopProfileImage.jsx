"use client";

import { uploadNewShopAvatar } from "@/actions";
import { Upload } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const ShopProfileImage = ({ shopDetails }) => {
  const currentImageUrl = shopDetails?.logo;

  const [isUploading, setIsUploading] = useState(false);
  const [profileImage, setProfileImage] = useState(
    currentImageUrl ||
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600",
  );
  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("image", file);

      if (profileImage && !profileImage.includes("unsplash.com")) {
        formData.append("oldImageUrl", profileImage);
      }

      const res = await uploadNewShopAvatar(shopDetails._id, formData);
      if (res?.success === true) {
        setProfileImage(res?.data?.logo);
      } else {
        alert("Upload failed: " + (res?.error || "Unknown error"));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
      <div className="bg-gray-50 px-6 py-3 border-b border-gray-300">
        <h2 className="font-bold text-gray-700 uppercase tracking-wider text-xs">
          Shop Banner Image
        </h2>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Current Banner</label>
          <div className="h-48 overflow-hidden bg-linear-to-br from-blue-50 to-blue-100 rounded-md border border-gray-300">
            <Image
              src={profileImage}
              className="w-full h-full object-cover"
              alt="Current Banner"
              width={600}
              height={400}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">
            Upload New Banner
          </label>
          <div
            onClick={handleDivClick}
            className="border-2 border-dashed border-gray-300 rounded-md p-8 text-center hover:border-amazon-blue transition-colors cursor-pointer"
          >
            <Upload className="w-12 h-12 mx-auto text-gray-400 mb-2" />
            <p className="text-sm text-gray-600 mb-1">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-gray-500">
              PNG, JPG up to 5MB (Recommended: 1200 x 400 pixels)
            </p>

            <input
              type="file"
              name="logo"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              disabled={isUploading}
              className="hidden"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProfileImage;
