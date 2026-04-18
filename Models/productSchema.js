import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    condition: {
      type: String,
      required: true,
      enum: ["New", "Renewed"],
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    discountPrice: {
      type: Number,
      default: 0,
    },
    stockQuantity: {
      type: Number,
      required: true,
      min: 0,
    },
    sku: {
      type: String,
      trim: true,
    },
    availability: {
      type: String,
      required: true,
      enum: ["In Stock", "Pre-Order", "Out of Stock"],
      default: "In Stock",
    },
    warrantyPeriod: {
      type: String,
      required: true,
      enum: ["No Warranty", "6 Months", "1 Year", "2 Years", "3 Years"],
    },
    images: {
      mainImage: {
        type: String,
        required: true,
      },
      additionalImages: {
        type: [String],
        default: [],
      },
    },
    specifications: {
      processor: { type: String, trim: true },
      ram: { type: String, trim: true },
      storage: { type: String, trim: true },
      displaySize: { type: String, trim: true },
      otherDetails: { type: String, trim: true },
    },
    shopId: {
      type: Schema.Types.ObjectId,
      ref: "Shop",
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
