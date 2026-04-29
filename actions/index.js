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

export const getAllProducts = async (shopId, page = 1, limit = 10) => {
  try {
    await dbConnect();

    const skip = (page - 1) * limit;

    const products = await Product.find({ shopId }).skip(skip).limit(limit);

    const total = await Product.countDocuments({ shopId });

    return {
      success: true,
      data: products,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  } catch (error) {
    console.error("Action Error:", error);
    return {
      success: false,
      error: "Something went wrong fetching all products",
    };
  }
};
