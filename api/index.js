import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/user-router";
dotenv.config();

mongoose
  .connect(process.env.MONGOURI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.use("/api/user", router);
