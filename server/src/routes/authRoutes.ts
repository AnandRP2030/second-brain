import { signup, signin } from "../controllers/authController";
import express from "express";
import { validate } from "../middlewares/validationMiddleware";
import { UserSigninSchema, UserSignupSchema } from "../validation/zodValidation";
const authRoutes = express.Router();
authRoutes.get('/auth', (req, res) => {
    res.send('auth working')
})
authRoutes.post("/signup", validate(UserSignupSchema), signup);
authRoutes.post("/signin", validate(UserSigninSchema), signin);

export default authRoutes;
