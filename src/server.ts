import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGODB_CONNECTION_URL || "";
mongoose.set("strictQuery", true);

const Connection = async () => {
  try {
    await mongoose.connect(url);
    console.log("Juice Bar Database is Running");
  } catch (error) {
    console.log("Error while connecting with DB");
  }
};

export default Connection;
