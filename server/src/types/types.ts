import { Request } from "express";
import mongoose, { Document } from "mongoose";

export interface CustomRequest extends Request {
  userId?: string;
}

export interface UserContent extends Document {
  userId: mongoose.Types.ObjectId;
  type: string;
  link: string;
  tags: mongoose.Types.ObjectId[];
}
