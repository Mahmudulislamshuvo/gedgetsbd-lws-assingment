import mongoose, { Schema } from "mongoose";

const ShopSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    description: {
      type: String,
      default: "",
    },
    logo: {
      type: String,
      default: "",
    },
    products: {
      type: [Schema.Types.ObjectId],
      ref: "Product",
      default: [],
    },
    location: {
      type: String,
      default: "",
      trim: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
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

const Shop = mongoose.models.Shop || mongoose.model("Shop", ShopSchema);

export default Shop;
