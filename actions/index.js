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

// export const addNewProducts = async (shopId, _prevState, formData) => {
//   try {
//     const resolvedFormData =
//       formData instanceof FormData ? formData : _prevState;

//     if (!(resolvedFormData instanceof FormData)) {
//       return {
//         success: false,
//         data: null,
//         error: "Invalid form submission payload",
//       };
//     }

//     await dbConnect();

//     const findShop = await Shop.findById(shopId);

//     if (!findShop) {
//       return { success: false, error: "Shop not found" };
//     }

//     const rawAdditionalImages = resolvedFormData.getAll("additionalImages");
//     const additionalImages = rawAdditionalImages.filter(
//       (url) => typeof url === "string" && url.trim() !== "",
//     );

//     const productData = {
//       productName: resolvedFormData.get("productName"),
//       category: resolvedFormData.get("category"),
//       brand: resolvedFormData.get("brand"),
//       condition: resolvedFormData.get("condition"),
//       description: resolvedFormData.get("description"),
//       price: Number(resolvedFormData.get("price")),
//       stockQuantity: Number(resolvedFormData.get("stockQuantity")),
//       sku: resolvedFormData.get("sku"),
//       availability: resolvedFormData.get("availability"),
//       warrantyPeriod: resolvedFormData.get("warrantyPeriod"),
//       images: {
//         mainImage: resolvedFormData.get("mainImage") || "",
//         additionalImages,
//       },
//       specifications: {
//         processor: resolvedFormData.get("processor"),
//         ram: resolvedFormData.get("ram"),
//         storage: resolvedFormData.get("storage"),
//         displaySize: resolvedFormData.get("displaySize"),
//         otherDetails: resolvedFormData.get("specifications"),
//       },
//     };

//     const addProduct = await Product.create({
//       ...productData,
//       shopId,
//     });

//     if (!addProduct) {
//       return { success: false, data: null, error: "Failed to add product" };
//     }

//     revalidatePath("/managelist");
//   } catch (error) {
//     if (
//       typeof error === "object" &&
//       error !== null &&
//       "digest" in error &&
//       String(error.digest).startsWith("NEXT_REDIRECT")
//     ) {
//       throw error;
//     }

//     return {
//       success: false,
//       data: null,
//       error: "Something went wrong adding new products",
//     };
//   }
// };
