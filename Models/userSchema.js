import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["user", "shopOwner"],
    default: "user",
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
