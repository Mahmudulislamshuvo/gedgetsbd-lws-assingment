"use server";

import { dbConnect } from "@/lib/dbConnect";
import Product from "@/Models/productSchema";
import Shop from "@/Models/shopSchema";
import User from "@/Models/userSchema";
import getCloudinaryImagePublicId from "@/utils/getCloudinaryImagePublicId";
import { revalidatePath } from "next/cache";
import { v2 as cloudinary } from "cloudinary";
import { cookies } from "next/headers";
import { auth } from "@/lib/auth";

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

export const getProductbyCategory = async (
  category,
  prevProductId,
  limit = 5,
) => {
  try {
    await dbConnect();

    if (!category) {
      return { success: false, error: "Category is required" };
    }
    const query = { category: category };

    if (prevProductId) {
      query._id = { $ne: prevProductId };
    }

    const products = await Product.find(query).limit(limit).lean();

    return { success: true, data: JSON.parse(JSON.stringify(products)) };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "Something went wrong fetching products by category",
    };
  }
};

export const getAllShops = async (page = 1, limit = 10, bybrand) => {
  try {
    await dbConnect();
    const skip = (page - 1) * limit;

    const query = {};

    if (bybrand) {
      const brandValue = String(bybrand).trim();
      if (brandValue) {
        query.partnerships = {
          $elemMatch: { $regex: `^${brandValue}$`, $options: "i" },
        };
      }
    }

    const shops = await Shop.find(query).skip(skip).limit(limit).lean();

    const totalCount = await Shop.countDocuments(query);

    return {
      success: true,
      data: JSON.parse(JSON.stringify(shops)),
      totalCount,
    };
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

    const { _id, __v, ownerId, createdAt, updatedAt, ...safeFormData } =
      formData;

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

export const uploadNewShopAvatar = async (shopId, formData) => {
  try {
    await dbConnect();

    const imageFile = formData.get("image");
    const oldImageUrl = formData.get("oldImageUrl");

    if (!shopId || !imageFile) {
      return { success: false, error: "Shop ID and image file are required" };
    }

    if (!cloudinaryConfigured) {
      return { success: false, error: "Cloudinary is not configured" };
    }

    if (oldImageUrl && !oldImageUrl.includes("unsplash.com")) {
      const oldPublicId = getCloudinaryImagePublicId(oldImageUrl);
      //not neccesary but good to have this check before deleting any image from cloudinary
      if (oldPublicId) {
        await cloudinary.uploader.destroy(oldPublicId);
      }
    }

    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "shop-avatars" },
        (error, result) => {
          if (error) return reject(error);
          return resolve(result);
        },
      );

      uploadStream.end(buffer);
    });

    const imageUrl = uploadResult?.secure_url || uploadResult?.url;
    if (!imageUrl) {
      return { success: false, error: "Image upload failed" };
    }

    const updatedShop = await Shop.findByIdAndUpdate(
      shopId,
      { $set: { logo: imageUrl } },
      { new: true, runValidators: true },
    ).lean();

    revalidatePath("/profile");

    return { success: true, data: JSON.parse(JSON.stringify(updatedShop)) };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "Something went wrong uploading new shop avatar",
    };
  }
};

export const addTocart = async (productId, userId, quantity = 1) => {
  try {
    await dbConnect();

    if (!productId) {
      return { success: false, error: "Product ID is required" };
    }

    const product = await Product.findById(productId).lean();

    if (!product) {
      return { success: false, error: "Product not found" };
    }

    const cookiesStore = await cookies();
    const existingCart = cookiesStore.get("cart");
    let cart = existingCart ? JSON.parse(existingCart.value) : [];

    const existingProductIndex = cart.findIndex(
      (item) => item.productId === productId,
    );

    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push({
        productId: productId,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
        userId,
      });
    }

    cookiesStore.set("cart", JSON.stringify(cart), {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
    });

    return { success: true, message: "Added to cart successfully!" };
  } catch (error) {
    console.log(error);
    return { success: false, error: "Something went wrong adding to cart" };
  }
};

export const updateCartQuantity = async (productId, nextQuantity) => {
  try {
    const session = await auth();
    const userId = session?.user?.id;

    if (!userId) {
      return { success: false, error: "Unauthorized" };
    }

    if (!productId) {
      return { success: false, error: "Product ID is required" };
    }

    const cookiesStore = await cookies();
    const existingCart = cookiesStore.get("cart");

    if (!existingCart?.value) {
      return { success: false, error: "Cart is empty" };
    }

    const cart = JSON.parse(existingCart.value);
    const normalizedQuantity = Math.max(1, Number(nextQuantity) || 1);
    let updated = false;

    const updatedCart = cart.map((item) => {
      if (item.productId === productId && item.userId === userId) {
        updated = true;
        return { ...item, quantity: normalizedQuantity };
      }

      return item;
    });

    if (!updated) {
      return { success: false, error: "Cart item not found" };
    }

    cookiesStore.set("cart", JSON.stringify(updatedCart), {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
    });

    revalidatePath("/cart");

    return { success: true, message: "Cart quantity updated successfully" };
  } catch (error) {
    console.log(error);
    return { success: false, error: "Something went wrong updating cart" };
  }
};

export const removeSingleItemFromCart = async (productId) => {
  try {
    const session = await auth();
    const userId = session?.user?.id;

    if (!userId) {
      return { success: false, error: "Unauthorized" };
    }

    if (!productId) {
      return { success: false, error: "Product ID is required" };
    }

    const cookiesStore = await cookies();
    const existingCart = cookiesStore.get("cart");
    if (!existingCart?.value) {
      return { success: false, error: "Cart is empty" };
    }

    const cart = JSON.parse(existingCart.value);

    const updatedCart = cart.filter(
      (item) => !(item.productId === productId && item.userId === userId),
    );

    cookiesStore.set("cart", JSON.stringify(updatedCart), {
      path: "/",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
    });

    revalidatePath("/cart");

    return { success: true, message: "Item removed from cart successfully" };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error: "Something went wrong removing item from cart",
    };
  }
};

export const getProductsByIds = async (productIds) => {
  await dbConnect();
  try {
    if (!Array.isArray(productIds) || productIds.length === 0) {
      return { success: false, error: "Product IDs must be a non-empty array" };
    }

    const products = await Product.find({ _id: { $in: productIds } }).lean();

    return {
      success: true,
      data: JSON.parse(JSON.stringify(products)),
    };
  } catch (error) {
    console.log(error);
    return { success: false, error: "Something went wrong fetching products" };
  }
};
