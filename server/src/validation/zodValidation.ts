import { z } from "zod";
export const UserSignupSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username should have min. 3 characters" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password should have min. 8 characters" }),
});

export const UserSigninSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password should have min. 8 charactes" }),
});
