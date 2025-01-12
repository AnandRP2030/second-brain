import { Navigate, Outlet } from "react-router-dom";
import { UserTokenId } from "../config/localStorageId";

export const ProtectRoutes = () => {
  const userId = localStorage.getItem(UserTokenId) || null;
  return userId ? <Outlet /> : <Navigate to="/signin" />;
};
