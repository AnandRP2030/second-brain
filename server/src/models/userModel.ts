import mongoose from "mongoose";
const { Schema, model } = mongoose;
const userSchema = new Schema(
  {
    username: {
      type: String,
      requied: [true, "Username is required"],
      unique: [true, "Username already taken!"],
    },
    email: {
      type: String,
      requied: [true, "Email is required"],
      unique: [true, "Email already taken!"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  {
    timestamps: true,
  }
);
export const UserModel = model("User", userSchema);
