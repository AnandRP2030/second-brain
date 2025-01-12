import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/second-brain/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const BACK_END_BASE_URL = `http://localhost:8000/second-brain/api`
export const FRONT_END_BASE_URL = `http://localhost:5173`