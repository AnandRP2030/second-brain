import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/db";
import jwt from 'jsonwebtoken';

const PORT = process.env.PORT || 3000;
const app = express();
app.get('/', (req, res) => {
    res.send('working.')
})
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started on port http://localhost:${PORT}/`);
    });
  })
  .catch((err) => {
    console.log("Error on connect DB", err);
  });
