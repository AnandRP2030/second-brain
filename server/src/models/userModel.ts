import mongoose from "mongoose";
const { Schema, model } = mongoose;
const userSchema = new Schema(
  {
    username: {
      type: String,
      requied: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const UserModel = model("User", userSchema);

