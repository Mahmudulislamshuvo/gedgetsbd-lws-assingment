import mongoose, { Schema } from "mongoose";

const OtpSchema = Schema({
  email: { type: String, required: true },
  code: { type: String, required: true },
  name: String,
  password: String,
  role: {
    type: String,
    enum: ["user", "shopOwner"],
    default: "user",
  },
  createdAt: { type: Date, default: Date.now, expires: 300 },
});

const Otp = mongoose.models.Otp || mongoose.model("Otp", OtpSchema);

export default Otp;
