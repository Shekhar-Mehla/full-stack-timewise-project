import { Router } from "express";
import express from "express";

import {
  createTask,
  getAllTasks,
  UpdatingTask,
  deleteTask,
} from "../Controllers/TaskControllers.js";

export const router = express.Router();

// post method to insert the data
router.post("/", createTask);

// get method to retrive data from the database
router.get("/", getAllTasks);
// patch method to update data partially
router.patch("/", UpdatingTask);

router.delete("/", deleteTask);
