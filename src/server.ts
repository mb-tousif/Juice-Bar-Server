import mongoose from "mongoose";
import colors from "colors";
import { url } from "./config/config";

mongoose.set("strictQuery", true);

const Connection = async () => {
  try {
    await mongoose.connect(url);
    console.log("Juice Bar Database is Running".blue);
  } catch (error) {
    console.log("Error while connecting with DB".red);
  }
};

export default Connection;
