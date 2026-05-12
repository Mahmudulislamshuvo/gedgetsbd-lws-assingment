"use server";

import { dbConnect } from "@/lib/dbConnect";
import Product from "@/Models/productSchema";
import Shop from "@/Models/shopSchema";
import User from "@/Models/userSchema";
import getCloudinaryImagePublicId from "@/utils/getCloudinaryImagePublicId";
import { revalidatePath } from "next/cache";
import { v2 as cloudinary } from "cloudinary";

const cloudinaryConfigured = cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getProfileData(userId) {
  try {
    await dbConnect();

    const user = await User.findById(userId).select("-password").lean();

    if (!user) {
      return { success: false, error: "User not found" };
    }

    const safeUser = {
      ...user,
      _id: user._id.toString(),
      shopId: user.shopId ? user.shopId.toString() : null,
      createdAt: user.createdAt?.toISOString(),
      updatedAt: user.updatedAt?.toISOString(),
    };

    if (user) {
      return {
        success: true,
        data: safeUser,
      };
    }

    return { success: false, error: "Invalid user type" };
  } catch (error) {
    console.error("Action Error:", error);
    return {
      success: false,
      error: "Something went wrong fetching profile data",
    };
  }
}

export const updateProfileData = async (userEmail, updatedData) => {
  try {
    await dbConnect();

    // Data validation or removing sensitive fields should be done here if needed.
    const user = await User.findOneAndUpdate(
      { email: userEmail },
      { $set: updatedData },
      { returnDocument: "after", runValidators: true },
    )
      .select([
        "-password",
        "-refreshToken",
        "-refreshTokenExpires",
        "-updatedAt",
      ])
      .lean();

    if (!user) {
      return { success: false, error: "User not found" };
    }

    const safeUser = {
      ...user,
      _id: user._id.toString(),
      email: user.email,
      shopId: user.shopId ? user.shopId.toString() : null,
    };

    return {
      success: true,
      data: safeUser,
    };
  } catch (error) {
    console.error("Action Error:", error);
    return {
      success: false,
      error: "Something went wrong updating profile data",
    };
  }
};

export const addNewProducts = async (shopId, formData) => {
  try {
    if (!(formData instanceof FormData)) {
      return { success: false, error: "Invalid form submission" };
    }

    await dbConnect();
    const findShop = await Shop.findById(shopId);
    if (!findShop) return { success: false, error: "Shop not found" };

    const rawAdditionalImages = formData.getAll("additionalImages");
    const additionalImages = rawAdditionalImages.filter(
      (url) => typeof url === "string" && url.trim() !== "",
    );

    const productData = {
      productName: formData.get("productName"),
      category: formData.get("category"),
      brand: formData.get("brand"),
      condition: formData.get("condition"),
      description: formData.get("description"),
      price: Number(formData.get("price")),
      stockQuantity: Number(formData.get("stockQuantity")),
      sku: formData.get("sku"),
      availability: formData.get("availability"),
      warrantyPeriod: formData.get("warrantyPeriod"),
      images: {
        mainImage: formData.get("mainImage") || "",
        additionalImages,
      },
      specifications: {
        processor: formData.get("processor"),
        ram: formData.get("ram"),
        storage: formData.get("storage"),
        displaySize: formData.get("displaySize"),
        otherDetails: formData.get("specifications"),
      },
    };

    const addProduct = await Product.create({ ...productData, shopId });
    if (!addProduct) {
      return { success: false, error: "Failed to add product" };
    }

    revalidatePath("/managelist");

    return { success: true, data: JSON.parse(JSON.stringify(addProduct)) };
  } catch (error) {
    return { success: false, error: "Something went wrong" };
  }
};

export const getProductById = async (productId, shopId) => {
  try {
    await dbConnect();

    if (!productId) {
      return { success: false, error: "Product ID is required" };
    }

    const product = await Product.findById(productId).lean();

    if (!product) {
      return { success: false, error: "Product not found" };
    }

    if (shopId && product.shopId?.toString() !== shopId.toString()) {
      return { success: false, error: "Unauthorized access" };
    }

    return {
      success: true,
      data: {
        ...product,
        _id: product._id.toString(),
        shopId: product.shopId?.toString(),
      },
    };
  } catch (error) {
    console.error("Action Error:", error);
    return {
      success: false,
      error: "Something went wrong fetching product",
    };
  }
};

export const updateProduct = async (productId, shopId, formData) => {
  try {
    if (!(formData instanceof FormData)) {
      return { success: false, error: "Invalid form submission" };
    }

    await dbConnect();

    if (!productId) {
      return { success: false, error: "Product ID is required" };
    }

    const existingProduct = await Product.findById(productId);

    if (!existingProduct) {
      return { success: false, error: "Product not found" };
    }

    if (shopId && existingProduct.shopId?.toString() !== shopId.toString()) {
      return { success: false, error: "Unauthorized access" };
    }

    const rawAdditionalImages = formData.getAll("additionalImages");
    const additionalImages = rawAdditionalImages.filter(
      (url) => typeof url === "string" && url.trim() !== "",
    );

    const productData = {
      productName: formData.get("productName"),
      category: formData.get("category"),
      brand: formData.get("brand"),
      condition: formData.get("condition"),
      description: formData.get("description"),
      price: Number(formData.get("price")),
      stockQuantity: Number(formData.get("stockQuantity")),
      sku: formData.get("sku"),
      availability: formData.get("availability"),
      warrantyPeriod: formData.get("warrantyPeriod"),
      images: {
        mainImage: formData.get("mainImage") || "",
        additionalImages,
      },
      specifications: {
        processor: formData.get("processor"),
        ram: formData.get("ram"),
        storage: formData.get("storage"),
        displaySize: formData.get("displaySize"),
        otherDetails: formData.get("specifications"),
      },
    };

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { $set: productData },
      { new: true, runValidators: true },
    );

    if (!updatedProduct) {
      return { success: false, error: "Failed to update product" };
    }

    revalidatePath("/managelist");

    return {
      success: true,
      data: JSON.parse(JSON.stringify(updatedProduct)),
    };
  } catch (error) {
    console.error("Action Error:", error);
    return { success: false, error: "Something went wrong" };
  }
};

export const getAllSinleProviderProducts = async (
  shopId,
  page = 1,
  limit = 10,
  filters = {},
) => {
  try {
    await dbConnect();

    const skip = (page - 1) * limit;

    let query = { shopId };

    if (filters.status && filters.status !== "All") {
      query.status = filters.status.toLowerCase();
    }

    if (filters.category && filters.category !== "All Categories") {
      query.category = filters.category;
    }
    if (filters.brand && filters.brand !== "All Brands") {
      query.brand = filters.brand;
    }
    if (filters.searchTerm) {
      query.$or = [
        { name: { $regex: filters.searchTerm, $options: "i" } },
        { sku: { $regex: filters.searchTerm, $options: "i" } },
      ];
    }

    const products = await Product.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 })
      .lean();
    const total = await Product.countDocuments(query);

    if (!products) {
      return {
        success: false,
        error: "No products found for this shop",
      };
    }

    const safeProducts = products.map((product) => ({
      ...product,
      _id: product._id.toString(),
      shopId: product.shopId?.toString(),
    }));

    return {
      success: true,
      data: safeProducts,
      pagination: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
  } catch (error) {
    console.error("Action Error:", error);
    return {
      success: false,
      error: "Something went wrong fetching all products",
    };
  }
};

export const deleteSingleProduct = async (productId) => {
  try {
    await dbConnect();

    if (!productId) {
      return { success: false, error: "Product ID is required" };
    }

    const findProuct = await Product.findById(productId);

    if (!findProuct) {
      return { success: false, error: "Product not found" };
    }
    // deleting cloudinary images before deleting the product from database
    if (cloudinaryConfigured) {
      const mainPublicId = getCloudinaryImagePublicId(
        findProuct?.images?.mainImage,
      );

      if (mainPublicId) {
        await cloudinary.uploader.destroy(mainPublicId);
      }

      // additionalImages deleting loop
      for (const imageUrl of findProuct?.images?.additionalImages || []) {
        const additionalPublicId = getCloudinaryImagePublicId(imageUrl);
        if (additionalPublicId) {
          await cloudinary.uploader.destroy(additionalPublicId);
        }
      }
    }

    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return { success: false, error: "Failed to delete product" };
    }
    revalidatePath("/managelist");
    return { success: true, message: "Product deleted successfully" };
  } catch (error) {
    console.log(error);
    return { success: false, error: "Failed to delete product" };
  }
};

export const getAllProducts = async (page = 1, limit = 10, filters = {}) => {
  try {
    await dbConnect();

    const {
      sort,
      category,
      brand,
      minPrice,
      maxPrice,
      reviews,
      availability,
      condition,
    } = filters;

    let query = {};

    const toArray = (value) =>
      Array.isArray(value) ? value.filter(Boolean) : value ? [value] : [];

    const categoryValues = toArray(category);
    const brandValues = toArray(brand);
    const conditionValues = toArray(condition);
    const availabilityValues = toArray(availability);
    const reviewValues = toArray(reviews)
      .map((value) => Number(value))
      .filter((value) => Number.isFinite(value));

    // filtering logic
    if (categoryValues.length) query.category = { $in: categoryValues };
    if (brandValues.length) query.brand = { $in: brandValues };
    if (conditionValues.length) query.condition = { $in: conditionValues };

    // price filtering logic
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // review rating filter
    if (reviewValues.length) {
      query.rating = { $gte: Math.max(...reviewValues) };
    }

    // availability filter
    if (availabilityValues.length) {
      const hasInStock = availabilityValues.includes("true");
      const hasOutOfStock = availabilityValues.includes("false");
      const availabilityLabels = availabilityValues.filter(
        (value) => value !== "true" && value !== "false",
      );

      if (availabilityLabels.length) {
        query.availability = { $in: availabilityLabels };
      }

      if (hasInStock && !hasOutOfStock) {
        query.stockQuantity = { $gt: 0 };
      } else if (hasOutOfStock && !hasInStock) {
        query.stockQuantity = { $lte: 0 };
      }
    }

    // sorting logic
    const sortValue = Array.isArray(sort) ? sort[0] : sort;
    let sortOptions = {};
    if (sortValue === "Price: Low to High") sortOptions.price = 1;
    else if (sortValue === "Price: High to Low") sortOptions.price = -1;
    else if (sortValue === "Newest Arrivals") sortOptions.createdAt = -1;
    else if (sortValue === "Avg. Customer Review") sortOptions.rating = -1;
    else sortOptions.createdAt = -1; // Default sorting

    // data query with pagination
    const skip = (page - 1) * limit;

    const products = await Product.find(query)
      .sort(sortOptions)
      .skip(skip)
      .limit(limit)
      .lean();

    // total count query without skip and limit for pagination
    const totalCount = await Product.countDocuments(query);

    return {
      success: true,
      data: JSON.parse(JSON.stringify(products)),
      totalCount,
      hasMore: skip + products.length < totalCount,
    };

    //
  } catch (error) {
    console.log(error);
    return { success: false, error: "Something went wrong fetching products" };
  }
};

export const getSingleProduct = async (productId) => {
  try {
    await dbConnect();

    if (!productId) {
      return { success: false, error: "Product ID is required" };
    }

    const product = await Product.findById(productId).lean();

    if (!product) {
      return { success: false, error: "Product not found" };
    }

    return { success: true, data: JSON.parse(JSON.stringify(product)) };
  } catch (error) {
    console.log(error);
    return { success: false, error: "Something went wrong fetching product" };
  }
};

export const getAllShops = async (page = 1, limit = 10) => {
  try {
    await dbConnect();
    const skip = (page - 1) * limit;
    const shops = await Shop.find().skip(skip).limit(limit).lean();

    return { success: true, data: JSON.parse(JSON.stringify(shops)) };
  } catch (error) {
    console.log(error);
    return { success: false, error: "Something went wrong fetching shops" };
  }
};

export const editShopDetails = async (shopId, formData) => {
  try {
    await dbConnect();
    if (!shopId || !formData) {
      return { success: false, error: "Shop ID and form data are required" };
    }

    // Remove internal/immutable fields that should not be updated
    const { _id, __v, ownerId, createdAt, updatedAt, ...safeFormData } = formData;

    const updateData = {
      ...safeFormData,
      establishedYear: safeFormData.establishedYear
        ? Number(safeFormData.establishedYear)
        : null,
      employeeCount: safeFormData.employeeCount
        ? Number(safeFormData.employeeCount)
        : null,
      partnerships: Array.isArray(safeFormData.partnerships)
        ? safeFormData.partnerships
        : String(safeFormData.partnerships || "")
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean),
    };

    const shop = await Shop.findByIdAndUpdate(
      shopId,
      { $set: updateData },
      {
        new: true,
        runValidators: true,
      },
    ).lean();

    if (!shop) {
      return { success: false, error: "Shop not found" };
    }

    revalidatePath("/profile");
    console.log(shop);
    return { success: true, data: JSON.parse(JSON.stringify(shop)) };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "Something went wrong editing shop details",
    };
  }
};

export const getShopDetails = async (shopId) => {
  try {
    await dbConnect();

    if (!shopId) {
      return { success: false, error: "Shop ID is required" };
    }

    const shop = await Shop.findById(shopId).lean();

    if (!shop) {
      return { success: false, error: "Shop not found" };
    }

    return { success: true, data: JSON.parse(JSON.stringify(shop)) };
  } catch (error) {
    return {
      success: false,
      error: "Something went wrong fetching shop details",
    };
  }
};
