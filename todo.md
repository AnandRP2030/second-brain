user logout cleear cookies 
export const logout = (req: Request, res: Response) => {
  res.clearCookie("token", { httpOnly: true, secure: process.env.NODE_ENV === "production" });
  res.status(200).json({ message: "Logged out successfully" });
};


credentials config

import axios from "axios";

export const userSignin = async ({ email, password }) => {
  const response = await axios.post(
    "/api/signin", // your API endpoint
    { email, password },
    {
      withCredentials: true,  // Send cookies along with the request
    }
  );
  return response.data;
};
