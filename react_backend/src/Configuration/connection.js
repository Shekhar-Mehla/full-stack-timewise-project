import mongoose from "mongoose";
export const mongodbConnection = async () => {
  try {
    const coonection = await mongoose.connect(`${process.env.MONGO_URL}`);
    return coonection;
  } catch (error) {
    console.log(error.message);
  }
};
