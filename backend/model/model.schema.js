import mongoose, { Schema } from "mongoose";

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
  productCategory: { type: String },
});

const cartSchema = new mongoose.Schema({
  cartProducts: [{ type: Schema.Types.ObjectId, ref: "product" }],
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

export const UserModel = mongoose.model("user", userSchema);
export const ProductModel = mongoose.model("product", productSchema);
export const CartModel = mongoose.model("cartproduct", cartSchema);
