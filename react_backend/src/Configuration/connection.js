import mongoose from "mongoose";
export const mongodbConnection = async () => {
  try {
    console.log(process.env.MONGO);
    const coonection = await mongoose.connect(process.env.MONGO);
    return coonection;
  } catch (error) {
    console.log(error.message);
  }
};
