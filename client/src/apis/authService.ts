import { SigninData, SignupData, SignupResponse } from "../types/auth";
import { axiosInstance } from "./axiosInstance";

export const userSignup = async (data: SignupData): Promise<SignupResponse> => {
  console.log('wlr', data)
  const res = await axiosInstance.post("/auth/signup", data);
  return res.data;
};

export const userSignin = async (data: SigninData) => {
  const res = await axiosInstance.post("/auth/signin", data);
  return res.data;
};
