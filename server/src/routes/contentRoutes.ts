import { createContent } from "../controllers/contentController";
import express from "express";
import {ContentValidationSchema} from "../validation/zodValidation";
import { validate } from "../middlewares/validationMiddleware";
import { verifyUser } from "../middlewares/authMiddleware";
const contentRoutes = express.Router();

contentRoutes.post(
  "/create",
  validate(ContentValidationSchema),
  verifyUser,
  createContent
);

export default contentRoutes;