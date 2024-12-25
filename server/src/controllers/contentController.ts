import mongoose from "mongoose";
import { ContentModel } from "../models/contentModel";
import { CustomRequest } from "../types/types";
import { Response, NextFunction } from "express";
export const createContent = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { type, link } = req.body;
    const userId = req.userId;
    const tags: mongoose.Types.ObjectId[] = [];
    const newContent = new ContentModel({
      type,
      link,
      userId,
      tags,
    });

    await newContent.save();
     res.status(201).json({ message: "Content saved successfully" });
     return
  } catch (error) {
    next(error);
  }
};
