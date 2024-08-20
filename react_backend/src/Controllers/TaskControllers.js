import { taskCollection } from "../models/taskModel.js";

// inserting data into database

export const createTask = async (req, res) => {
  try {
    const result = await taskCollection(req.body).save();
    res.status(201).json({
      status: "succesfull",
      message: "task has been created succesfully",
      result,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: "failed to create task try again",
    });
  }
};

// reteriving the data from the database

export const getAllTasks = async (req, res) => {
  try {
    const result = await taskCollection.find();
    res.status(200).json({
      message: "successfull",
      result,
    });
  } catch (error) {
    res.json({
      error: error.message,
      message:
        "failed to retrieve the data from the database chekc your db connection and try again later!",
    });
  }
};
// updating the task using the patch methed from the database
export const UpdatingTask = async (req, res) => {
  const { _id, ...rest } = req.body;
  try {
    const result = await taskCollection.findByIdAndUpdate(_id, rest, {
      new: true,
    });
    result
      ? res.status(200).json({
          message: "your data has been succefully updated",
          result,
        })
      : res.status(400).json({
          message: "task not found",
        });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: "failed to update",
    });
  }
};
// deleting the task by id
export const  deleteTask = async (req, res) => {
  const result = await taskCollection.deleteOne(req.body);
  res.json(result);
}