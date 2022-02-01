import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  passwd: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String },
  admin: Boolean,
});

const productSchema = new mongoose.Schema({
  productTitle: { type: String, required: true, unique: true },
  productImg: { type: String },
  productDesc: { type: String },
  productPrice: { type: Number },
});

export const UserModel = mongoose.model("user", userSchema);
export const ProductModel = mongoose.model("product", productSchema);
