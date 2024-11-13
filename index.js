import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

import taskRouter from "./src/route/recipe.js";
const app = express();

app.use(cors());

app.use(express.json());

mongoose
  .connect(process.env.MONGO_CONECTION)
  .then(() => console.log("Connected!"))
  .catch(() => {
    console.log("Bad connection");
  });

app.use(taskRouter);

app.use((req, res) => {
  res.status(404).json({ response: "your endpoint does not exit" });
});

app.listen(process.env.PORT, () => {
  console.log(`App was started on port ${process.env.PORT}`);
});
