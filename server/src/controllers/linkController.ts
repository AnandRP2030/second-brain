import { LinkModel } from "../models/linkModel";
import { Response, NextFunction } from "express";
import { CustomRequest } from "../types/types";
import { generateRandomString } from "../utils/genRandomNum";
import { ContentModel } from "../models/contentModel";
import { UserModel } from "../models/userModel";

export const createSharableLink = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const share = req.body.share;
    if (!share) {
      res.status(400).json({ message: "share is false" });
      return;
    }

    const newLink = new LinkModel({
      userId: req.userId,
      hash: generateRandomString(20),
    });
    await newLink.save();
    res.status(200).json({ message: "Link generated", data: newLink });
  } catch (error) {
    next(error);
  }
};

export const shareLink = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.link;
    const link = await LinkModel.findOne({ hash: id });
    if (!link) {
      const error = new Error("Link not found");
      throw error;
    }
    const contents = await ContentModel.find({
      userId: link.userId.toString(),
    });
    const user = await UserModel.findById(link.userId);
    if (!user) {
      const error = new Error("User not found");
      throw error;
    }
    res.status(200).json({
      message: "Fetched users brain",
      data: {
        username: user.username,
        contents: contents,
      },
    });
  } catch (error) {
    next(error);
  }
};
