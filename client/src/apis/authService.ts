import axios from "axios";
import { SigninData, SignupData, SignupResponse } from "../types/auth";
import { axiosInstance } from "./axiosInstance";

export const userSignup = async (data: SignupData): Promise<SignupResponse> => {
  const res = await axios.post("http://localhost:8000/second-brain/api/signup", data);
  return res.data;
};

export const userLogin = async (data: SigninData) => {
  const res = await axiosInstance.post("/sigin", data);
  return res.data;
};
