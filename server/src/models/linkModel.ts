import mongoose, { Schema, model } from "mongoose";
const linkSchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
      unique: true,
      ref: "User"
    },
    hash: {
        type: String
    }
  },
  { timestamps: true }
);
export const LinkModel = model("Link", linkSchema);
