import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";
import { CustomRequest } from "../types/types";
interface JWTPayload {
  userId?: string;
}

export const verifyUser = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
      res.status(401).json({ message: "No token. Authentication failed" });
      return;
    }

    const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "12341234";
    const decoded = jwt.verify(token, JWT_SECRET_KEY) as JWTPayload;
    if (decoded.userId) {
      req.userId = decoded.userId;
    }
    next();
  } catch (error) {
    next(error);
  }
};
