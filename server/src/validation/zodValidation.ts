import mongoose from "mongoose";
import { z } from "zod";
export const UserSignupSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username should have min. 3 characters" }),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password should have min. 6 characters" }),
});

export const UserSigninSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password should have min. 6 charactes" }),
});

const objectIdSchema = z.string().refine(val => mongoose.Types.ObjectId.isValid(val), {
  message: "Invalid user id"
})
export const ContentValidationSchema = z.object ({
  type: z.string(),
  link: z.string(),
})