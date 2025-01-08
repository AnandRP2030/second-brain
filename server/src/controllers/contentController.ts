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
    return;
  } catch (error) {
    next(error);
  }
};

export const getAllContent = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const contents = await ContentModel.find()
      .populate("userId", "username")
      .exec();
    res.status(200).json({ message: "All contents", data: contents });
  } catch (error) {
    next(error);
  }
};

export const getContentsByUserId = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    if (!mongoose.isValidObjectId(userId)) {
      const error = new Error("User id is invalid");
      // @ts-ignore
      error.status = 400;
      throw error;
    }
    const contents = await ContentModel.find({ userId });
    if (!contents || contents.length === 0) {
      const error = new Error("Content not found");
      // @ts-ignore
      error.status = 404;
      throw error;
    }
    res.status(200).json({
      message: "Content found",
      data: contents,
    });
    return;
  } catch (error) {
    next(error);
  }
};

export const deleteContentById = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { contentId } = req.params;
    if (!mongoose.isValidObjectId(contentId)) {
      const error = new Error("Content id is invalid");
      // @ts-ignore
      error.status = 400;
      throw error;
    }
    const content = await ContentModel.findByIdAndDelete(contentId);
    if (!content) {
      const error = new Error("Content not found");
      // @ts-ignore
      error.status = 404;
      throw error;
    }
    res.status(200).json({ message: "Content deleted successfully" });
    return;
  } catch (error) {
    next(error);
  }
};
