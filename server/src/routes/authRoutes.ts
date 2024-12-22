import { signup, signin } from "../controllers/authController";
import express from "express";
const authRoutes = express.Router();
authRoutes.get('/auth', (req, res) => {
    res.send('auth working')
})
authRoutes.post("/signup", signup);
authRoutes.post("/signin", signin);

export default authRoutes;
