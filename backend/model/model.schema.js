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

export const UserModel = mongoose.model("user", userSchema);
