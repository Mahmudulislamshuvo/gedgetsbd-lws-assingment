"use client";

import { Plus, Upload, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const UPLOAD_PRESET = "my_gadget_shop";
const MAX_FILE_SIZE_MB = 5;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

const ImageComponent = ({ resetKey = 0 }) => {
  const [mainImagePreview, setMainImagePreview] = useState(null);
  const [additionalImagePreviews, setAdditionalImagePreviews] = useState([]);
  const [mainError, setMainError] = useState("");
  const [additionalErrors, setAdditionalErrors] = useState([]);

  // image URLs state from cloudinary
  const [mainImageUrl, setMainImageUrl] = useState("");
  const [additionalImageUrls, setAdditionalImageUrls] = useState([]);

  // uploading state
  const [isMainUploading, setIsMainUploading] = useState(false);
  const [uploadingIndexes, setUploadingIndexes] = useState([]);
  const isMainUploadingRef = useRef(false);
  const uploadingIndexesRef = useRef([]);

  const mainImageInputRef = useRef(null);
  const additionalImageInputRefs = useRef([]);
  const mainPreviewRef = useRef(null);
  const additionalPreviewsRef = useRef([]);
  const hasMountedRef = useRef(false);

  useEffect(() => {
    mainPreviewRef.current = mainImagePreview;
  }, [mainImagePreview]);

  useEffect(() => {
    additionalPreviewsRef.current = additionalImagePreviews;
  }, [additionalImagePreviews]);

  useEffect(() => {
    isMainUploadingRef.current = isMainUploading;
  }, [isMainUploading]);

  useEffect(() => {
    uploadingIndexesRef.current = uploadingIndexes;
  }, [uploadingIndexes]);

  useEffect(() => {
    return () => {
      const mainPreview = mainPreviewRef.current;
      if (mainPreview && mainPreview.startsWith("blob:")) {
        URL.revokeObjectURL(mainPreview);
      }

      additionalPreviewsRef.current.forEach((preview) => {
        if (preview && preview.startsWith("blob:")) {
          URL.revokeObjectURL(preview);
        }
      });
    };
  }, []);

  useEffect(() => {
    const form = mainImageInputRef.current?.closest("form");
    if (!form) return;

    const handleFormSubmit = (event) => {
      if (
        isMainUploadingRef.current ||
        uploadingIndexesRef.current.length > 0
      ) {
        event.preventDefault();
        setMainError("Please wait for image upload to finish.");
      }
    };

    form.addEventListener("submit", handleFormSubmit);
    return () => {
      form.removeEventListener("submit", handleFormSubmit);
    };
  }, []);

  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        { method: "POST", body: formData },
      );
      const data = await res.json();

      if (!res.ok || !data?.secure_url) {
        const message = data?.error?.message || "Image upload failed.";
        throw new Error(message);
      }

      return data.secure_url;
    } catch (error) {
      console.error("Product Image Upload error:", error);
      throw error;
    }
  };

  const validateFile = (file) => {
    if (!file.type?.startsWith("image/")) {
      return "Only image files are allowed.";
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      return `Max file size is ${MAX_FILE_SIZE_MB}MB.`;
    }

    return "";
  };

  const revokePreview = (previewUrl) => {
    if (previewUrl && previewUrl.startsWith("blob:")) {
      URL.revokeObjectURL(previewUrl);
    }
  };

  const clearAllImages = () => {
    revokePreview(mainPreviewRef.current);
    additionalPreviewsRef.current.forEach((preview) => revokePreview(preview));

    setMainImagePreview(null);
    setMainImageUrl("");
    setMainError("");

    setAdditionalImagePreviews([]);
    setAdditionalImageUrls([]);
    setAdditionalErrors([]);

    setIsMainUploading(false);
    setUploadingIndexes([]);

    if (mainImageInputRef.current) {
      mainImageInputRef.current.value = "";
    }

    additionalImageInputRefs.current.forEach((input) => {
      if (input) input.value = "";
    });
  };

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true;
      return;
    }

    clearAllImages();
  }, [resetKey]);

  // --- Main Image Handlers ---
  const handleMainImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileError = validateFile(file);
    if (fileError) {
      setMainError(fileError);
      if (mainImageInputRef.current) mainImageInputRef.current.value = "";
      return;
    }

    setMainError("");
    setMainImageUrl("");

    revokePreview(mainImagePreview);
    setMainImagePreview(URL.createObjectURL(file));

    if (mainImageInputRef.current) mainImageInputRef.current.value = "";

    setIsMainUploading(true);
    try {
      const uploadedUrl = await uploadToCloudinary(file);
      setMainImageUrl(uploadedUrl);
    } catch (error) {
      setMainError(error?.message || "Image upload failed.");
    } finally {
      setIsMainUploading(false);
    }
  };

  const removeMainImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // **নোট:** ক্লাউডিনারি থেকে ক্লায়েন্ট সাইড থেকে ডিলিট করা সিকিউর না।
    if (mainImageInputRef.current) mainImageInputRef.current.value = "";
    revokePreview(mainImagePreview);
    setMainImagePreview(null);
    setMainImageUrl("");
    setMainError("");
  };

  // --- Additional Images Handlers ---
  const handleAdditionalImageChange = async (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileError = validateFile(file);
    if (fileError) {
      setAdditionalErrors((prev) => {
        const next = [...prev];
        next[index] = fileError;
        return next;
      });
      e.target.value = "";
      return;
    }

    setAdditionalErrors((prev) => {
      const next = [...prev];
      next[index] = "";
      return next;
    });

    const currentPreview = additionalImagePreviews[index];
    revokePreview(currentPreview);

    const newPreviews = [...additionalImagePreviews];
    newPreviews[index] = URL.createObjectURL(file);
    setAdditionalImagePreviews(newPreviews);

    e.target.value = "";

    setUploadingIndexes((prev) =>
      prev.includes(index) ? prev : [...prev, index],
    );

    try {
      const uploadedUrl = await uploadToCloudinary(file);
      const newUrls = [...additionalImageUrls];
      newUrls[index] = uploadedUrl;
      setAdditionalImageUrls(newUrls);
    } catch (error) {
      const newUrls = [...additionalImageUrls];
      newUrls[index] = null;
      setAdditionalImageUrls(newUrls);
      setAdditionalErrors((prev) => {
        const next = [...prev];
        next[index] = error?.message || "Image upload failed.";
        return next;
      });
    } finally {
      setUploadingIndexes((prev) => prev.filter((i) => i !== index));
    }
  };

  const removeAdditionalImage = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    revokePreview(additionalImagePreviews[index]);
    const newPreviews = [...additionalImagePreviews];
    newPreviews[index] = null;
    setAdditionalImagePreviews(newPreviews);

    const newUrls = [...additionalImageUrls];
    newUrls[index] = null;
    setAdditionalImageUrls(newUrls);

    setAdditionalErrors((prev) => {
      const next = [...prev];
      next[index] = "";
      return next;
    });
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
          <div className="border-2 border-dashed border-gray-300 rounded-md p-8 text-center hover:border-amazon-blue transition-colors cursor-pointer relative">
            {mainImagePreview ? (
              <div className="relative w-full h-full">
                <Image
                  src={mainImagePreview}
                  alt="Main Preview"
                  className="w-full h-full object-contain"
                  height={320}
                  width={320}
                />
                <button
                  onClick={removeMainImage}
                  disabled={isMainUploading}
                  type="button"
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <>
                <Upload className="w-12 h-12 mx-auto text-gray-400 mb-2" />

                <p className="text-sm text-gray-600 mb-1">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500">PNG, JPG up to 5MB</p>
              </>
            )}

            <input
              type="file"
              accept="image/*"
              ref={mainImageInputRef}
              className={`absolute inset-0 w-full h-full opacity-0 ${mainImagePreview ? "pointer-events-none" : "cursor-pointer"}`}
              onChange={handleMainImageChange}
              disabled={isMainUploading}
            />
            {isMainUploading ? (
              <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                <div className="h-8 w-8 border-2 border-gray-300 border-t-amazon-blue rounded-full animate-spin" />
              </div>
            ) : null}
          </div>
          {mainError ? (
            <p className="text-xs text-red-600 mt-2">{mainError}</p>
          ) : null}
        </div>
        <input type="hidden" name="mainImage" value={mainImageUrl || ""} />

        {/* Additional Images */}
        <div>
          <label className="block text-sm font-bold mb-1">
            Additional Images (Optional)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[0, 1, 2, 3].map((index) => {
              const isUploading = uploadingIndexes.includes(index);
              const errorMessage = additionalErrors[index];

              return (
                <div
                  key={index}
                  className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center hover:border-amazon-blue transition-colors aspect-square flex items-center justify-center relative overflow-hidden"
                >
                  {additionalImagePreviews[index] ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={additionalImagePreviews[index]}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-full object-cover"
                        height={200}
                        width={200}
                      />
                      <button
                        onClick={(e) => removeAdditionalImage(e, index)}
                        disabled={isUploading}
                        type="button"
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <Plus className="w-8 h-8 text-gray-400" />
                      <input
                        type="file"
                        accept="image/*"
                        ref={(el) => {
                          additionalImageInputRefs.current[index] = el;
                        }}
                        className={`absolute inset-0 w-full h-full opacity-0 ${additionalImagePreviews[index] ? "pointer-events-none" : "cursor-pointer"}`}
                        onChange={(e) => handleAdditionalImageChange(e, index)}
                        disabled={isUploading}
                      />
                    </>
                  )}
                  <input
                    type="hidden"
                    name="additionalImages"
                    value={additionalImageUrls[index] || ""}
                  />
                  {isUploading ? (
                    <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                      <div className="h-6 w-6 border-2 border-gray-300 border-t-amazon-blue rounded-full animate-spin" />
                    </div>
                  ) : null}
                  {errorMessage ? (
                    <p className="absolute bottom-1 left-1 right-1 text-[10px] text-red-600 bg-white/90 rounded px-1">
                      {errorMessage}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
