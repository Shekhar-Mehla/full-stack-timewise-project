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
    type: {
      type: String,
      default: "entry",
    },
  },
  { strict: true }
);
const taskCollection = mongoose.model("tasks", taskSchema);

// post method to insert the data
router.post("/", async (req, res) => {
  const result = await taskCollection(req.body).save();
  res.send(req.body);
});

// get method to retrive data from the database
router.get("/", async (req, res) => {
  const result = await taskCollection.find();
  res.json(result);
});
