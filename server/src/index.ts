import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/dbConfig";
import jwt from 'jsonwebtoken';
import { erroHandler } from "./middlewares/errorMiddleware";
import authRoutes from "./routes/authRoutes"
const PORT = process.env.PORT || 8000;
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('second brain working.')
})
app.use('/second-brain/api/auth/',authRoutes);

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
