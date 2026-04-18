"use server";

import { dbConnect } from "@/lib/dbConnect";
import User from "@/Models/userSchema";

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

export const addNewProducts = async (shopId, productData) => {
  try {
    await dbConnect();

    const findShop = await Shop.findById(shopId);

    if (!findShop) {
      return { success: false, error: "Shop not found" };
    }

    const addProduct = await Product.create({
      ...productData,
      shopId,
    });

    if (!addProduct) {
      return { success: false, error: "Failed to add product" };
    }

    return {
      success: true,
      data: addProduct,
    };

    //
  } catch (error) {
    console.error("Action Error:", error);
    return {
      success: false,
      error: "Something went wrong adding new products",
    };
  }
};
