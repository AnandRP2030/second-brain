import mongoose, { Schema, model } from "mongoose";

const contentSchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    type: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    tags: [
      {
        ref: "Tag",
        type: mongoose.Types.ObjectId,
      },
    ],
  },
  { timestamps: true }
);

export const ContentModel = model("Content", contentSchema);

