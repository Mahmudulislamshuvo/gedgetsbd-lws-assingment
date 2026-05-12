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

    ownerName: {
      type: String,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      // required: true,
    },
    phone: {
      type: String,
      trim: true,
      // required: true,
    },
    specialization: {
      type: String,
      trim: true,
      default: "",
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
    address: {
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
    establishedYear: {
      type: Number,
      default: null,
    },
    employeeCount: {
      type: Number,
      default: null,
    },
    partnerships: {
      type: [String],
      default: [],
    },
    website: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Shop = mongoose.models.Shop || mongoose.model("Shop", ShopSchema);

export default Shop;
