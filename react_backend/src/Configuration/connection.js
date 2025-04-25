import mongoose from "mongoose";
export const mongodbConnection = async () => {
  try {
    console.log(process.env.MONGO);
    const coonection = await mongoose.connect(
      "mongodb+srv://Shekhar:M8hEhoPSugRWsdaG@cluster0.7ohfy.mongodb.net/time_wise?retryWrites=true&w=majority&appName=Cluster0"
    );
    return coonection;
  } catch (error) {
    console.log(error.message);
  }
};
