import { Request, Response, NextFunction } from "express";
import { UserModel } from "../models/userModel";
import { z } from "zod";
import { hashedPassword, verifyPasswords } from "../utils/handlePassword";
import { createToken } from "../utils/generateToken";

const UserSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username length minimum 3 characters" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password length should be 8 characters" }),
});

type UserId = {
  userId: string
}
export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
   
    const { username, email, password } = req.body;
    const hashPassword = await hashedPassword(password)
    const user = await new UserModel({
      username,
      email,
      password: hashPassword,
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
    
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(404).json({ message: "Email id or password is incorrect" });
      return;
    }
    if (!verifyPasswords(password, user.password)) {
      res.status(404).json({ message: "Email id or password is incorrect" });
      return;
    }

    const token = createToken({userId: user._id.toString()})

    res.status(200).json({ message: "Loggin success", token });
  } catch (error) {
    next(error);
  }
};
