import mongoose from "mongoose";


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
 export const taskCollection = mongoose.model("tasks", taskSchema);

  
