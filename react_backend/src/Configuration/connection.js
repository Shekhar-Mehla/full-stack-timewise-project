import mongoose from "mongoose";
export const mongodbConnection = async () => {
  try {
    const coonection = await mongoose.connect(
      "mongodb://localhost:27017/shekhar_time_wise"
    );
    return coonection;
  } catch (error) {
    console.log(error.message);
  }
};
