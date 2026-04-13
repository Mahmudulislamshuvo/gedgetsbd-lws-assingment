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
  },
  {
    timestamps: true,
  },
);

const Shop = mongoose.models.Shop || mongoose.model("Shop", ShopSchema);

export default Shop;
