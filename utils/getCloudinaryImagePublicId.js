/**
 * Cloudinary URL থেকে public_id এক্সট্রাক্ট করার ফাংশন।
 * @param {string} url - Cloudinary ইমেজের সম্পূর্ণ URL
 * @returns {string|null} - ইমেজের public_id অথবা URL সঠিক না হলে null
 */
const getCloudinaryImagePublicId = (url) => {
  if (!url || typeof url !== "string") return null;

  try {
    const urlParts = url.split("/");
    const lastPart = urlParts[urlParts.length - 1];

    const publicIdWithExtension = lastPart.split(".");
    publicIdWithExtension.pop();
    const publicId = publicIdWithExtension.join(".");

    return publicId;
  } catch (error) {
    console.error("Error extracting public_id:", error);
    return null;
  }
};

export default getCloudinaryImagePublicId;
