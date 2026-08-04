import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      dbName: "Job_Portal",
    });
    console.log("MongoDB Connected Sucessfully !");
  } catch (error) {
    console.log(`Failed to connect ${error}`);
  }
};

export default dbConnection;