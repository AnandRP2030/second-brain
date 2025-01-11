import { SigninData, SignupData, SignupResponse } from "../types/auth";
import { axiosInstance } from "./axiosInstance";

export const userSignup = async (data: SignupData): Promise<SignupResponse> => {
  const res = await axiosInstance.post("/auth/signup", data);
  return res.data;
};

export const userLogin = async (data: SigninData) => {
  const res = await axiosInstance.post("/sigin", data);
  return res.data;
};
