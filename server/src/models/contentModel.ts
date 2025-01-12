import mongoose, { Schema, model } from "mongoose";

const contentSchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "User Id is required"]
    },
    title: {
      type: String,
      required: [true, "Title is required"]
    },
    type: {
      type: String,
      required: [true,"Type is required"]
    },
    link: {
      type: String,
      required: [true,"Link is required"]
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

