import {
  createContent,
  deleteContentById,
  getAllContent,
  getContentsByUser,
} from "../controllers/contentController";
import express from "express";
import { ContentValidationSchema } from "../validation/zodValidation";
import { validate } from "../middlewares/validationMiddleware";
import { verifyUser } from "../middlewares/authMiddleware";
const contentRoutes = express.Router();
// token is requried for content routes.
contentRoutes.use(verifyUser);
contentRoutes.post("/", validate(ContentValidationSchema), createContent);

contentRoutes.get("/", getAllContent);
contentRoutes.get(`/user`, getContentsByUser);
contentRoutes.delete(`/:contentId`, deleteContentById);
export default contentRoutes;
