"use server";

import { dbConnect } from "@/lib/dbConnect";
import Product from "@/Models/productSchema";
import Shop from "@/Models/shopSchema";
import User from "@/Models/userSchema";
import { revalidatePath } from "next/cache";

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

export const getAllProducts = async (
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

    console.log(findProuct);
    return;
  } catch (error) {
    console.log(error);
  }
};
