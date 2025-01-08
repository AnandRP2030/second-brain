import { createContent, deleteContentById, getAllContent, getContentsByUserId } from "../controllers/contentController";
import express from "express";
import {ContentValidationSchema} from "../validation/zodValidation";
import { validate } from "../middlewares/validationMiddleware";
import { verifyUser } from "../middlewares/authMiddleware";
const contentRoutes = express.Router();
// token is requried for content routes.
contentRoutes.use(verifyUser) 
contentRoutes.post(
  "/create",
  validate(ContentValidationSchema),
  createContent
);

contentRoutes.get("/all", getAllContent)
contentRoutes.get(`/get-by-user-id/:userId`, getContentsByUserId)
contentRoutes.delete(`/delete-content-by-id/:contentId`, deleteContentById)
export default contentRoutes;