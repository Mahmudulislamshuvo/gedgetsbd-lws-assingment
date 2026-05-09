"use client";

import Image from "next/image";
import { useState } from "react";

const ProductDetailsImageCompo = ({ product }) => {
  const images = product?.data?.images;

  const [mainImage, setMainImage] = useState(images?.mainImage);

  // Check if additional images are available (data exists in the list)
  const hasAdditionalImages = images?.additionalImages?.length > 0;

  return (
    <div className="lg:col-span-5 flex gap-4">
      {hasAdditionalImages && (
        <div className="flex flex-col gap-2 w-16 shrink-0">
          <button
            className={`w-14 h-14 border rounded overflow-hidden hover:shadow-md transition-all ${
              mainImage === images?.mainImage
                ? "border-[#e77600] ring-1 ring-[#e77600]"
                : "border-gray-300"
            }`}
            onClick={() => setMainImage(images?.mainImage)}
          >
            <Image
              src={images?.mainImage}
              className="w-full h-full object-cover"
              alt="Thumbnail"
              width={56}
              height={56}
            />
          </button>

          {images?.additionalImages?.map((thumbnail, index) => (
            <button
              key={index}
              className={`w-14 h-14 border rounded overflow-hidden hover:shadow-md transition-all ${
                mainImage === thumbnail
                  ? "border-[#e77600] ring-1 ring-[#e77600]"
                  : "border-gray-300"
              }`}
              onClick={() => setMainImage(thumbnail)}
            >
              <Image
                src={thumbnail}
                className="w-full h-full object-cover"
                alt={`Thumbnail ${index + 1}`}
                width={56}
                height={56}
              />
            </button>
          ))}
        </div>
      )}

      {/* main image */}
      <div className="flex-1 border border-gray-200 rounded bg-gray-50 relative aspect-square max-h-[500px] overflow-hidden">
        {mainImage ? (
          <Image
            src={mainImage}
            alt="Main Product Image"
            fill
            className="object-contain mix-blend-multiply p-4"
            priority
          />
        ) : (
          <span className="flex h-full items-center justify-center text-gray-400">
            No Image Available
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsImageCompo;
