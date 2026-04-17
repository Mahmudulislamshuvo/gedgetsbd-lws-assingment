"use server";

import { dbConnect } from "@/lib/dbConnect";
import User from "@/Models/userSchema";

export async function getProfileData(userId, userType) {
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

    // userType অনুযায়ী আলাদা ডাটা রিটার্ন করছি
    if (userType === "customer") {
      return {
        success: true,
        data: {
          profile: safeUser,
          roleInfo: "This is customer exclusive data",
          totalOrders: 12,
          pendingDeliveries: 1,
        },
      };
    } else if (userType === "shopOwner") {
      return {
        success: true,
        data: {
          profile: safeUser,
          roleInfo: "This is shop owner exclusive data",
          totalProducts: 45,
          totalSales: 12000,
        },
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

export const updateProfileData = async (userId, userType, updatedData) => {
  try {
    await dbConnect();

    // Data validation or removing sensitive fields should be done here if needed.
    const user = await User.findOneAndUpdate(
      { _id: userId, userType },
      { $set: updatedData },
      { new: true, runValidators: true },
    )
      .select("-password")
      .lean();

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
