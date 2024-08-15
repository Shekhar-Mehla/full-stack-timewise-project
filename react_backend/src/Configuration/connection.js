import mongoose from "mongoose";
export const mongodbConnection = () => {
  try {
    mongoose.connect("mongodb://localhost:27017/shekhar_time_wise");
  } catch (error) {
    console.log(error.message);
  }
};
