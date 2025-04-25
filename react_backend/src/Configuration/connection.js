import mongoose from "mongoose";
export const mongodbConnection = async () => {
  try {
    console.log(process.env.MONGO);
    
    return coonection;
  } catch (error) {
    console.log(error.message);
  }
};
