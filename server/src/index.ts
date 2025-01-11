import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/dbConfig";
import jwt from "jsonwebtoken";
import { erroHandler } from "./middlewares/errorMiddleware";
import authRoutes from "./routes/authRoutes";
import { z } from "zod";
import contentRoutes from "./routes/contentRoutes";
import linkRoutes from "./routes/linkRoutes";
import cors from 'cors';

const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("second brain working.");
});

const onlyString = z.string();
const onlyNum = z.number()

app.use("/second-brain/api/auth", authRoutes);
app.use("/second-brain/api/content", contentRoutes);
app.use("/second-brain/api/link-share", linkRoutes);

//error handling middleware
app.use(erroHandler);
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port http://localhost:${PORT}/`);
    });
  })
  .catch((err) => {
    console.log("Error on connect DB", err);
  });
