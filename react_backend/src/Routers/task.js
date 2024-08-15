import { Router } from "express";
import express from "express";
import mongoose from "mongoose";
export const router = express.Router();

// creating table
const taskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      require: true,
    },
    hr: {
      type: Number,
      require: true,
    },
  },
  { strict: true }
);
const taskCollection = mongoose.model("tasks", taskSchema);
router.post("/", (req, res) => {
  const result = taskCollection(req.body).save();
});
