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
  try {
    const result = await taskCollection.find();
    res.json({
      message: "successfull",
      result,
    });
  } catch (error) {
    res.json({
      message: error.message(),
    });
  }
});
// patch method to update data partially
router.patch("/", async (req, res) => {
  const { _id, ...rest } = req.body;
  try {
    const result = await taskCollection.findByIdAndUpdate(_id, rest, {
      new: true,
    });
    res.json({
      message: "your data has been succefully updated",
      result,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});
router.delete("/", async (req, res) => {
  const { _id } = req.body;
  const myqueeerry = { _id };
  const result = await taskCollection.deleteOne(myqueeerry);
  res.json(result);
  // try {
  //   const result = await taskCollection.findByIdAndDelete(_id, { new: true });
  //   res.json({
  //     message: "your data has been succefully deleted",
  //     result,
  //   });
  // } catch (error) {
  //   res.json({
  //     message: error.message,
  //   });
  // }
});
