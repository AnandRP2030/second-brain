import { Request, Response, NextFunction } from "express";
import { UserModel } from "../models/userModel";
import { z } from "zod";

const UserSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username length minimum 3 characters" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password length should be 8 characters" }),
});

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
   
    const { username, email, password } = req.body;

    const user = await new UserModel({
      username,
      email,
      password,
    });
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(404).json({ message: "Email id or password is incorrect" });
      return;
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "Email id or password is incorrect" });
      return;
    }
    if (user.password !== password) {
      res.status(404).json({ message: "Email id or password is incorrect" });
      return;
    }

    res.status(200).json({ message: "Loggin success" });
  } catch (error) {
    next(error);
  }
};
