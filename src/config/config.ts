import dotenv from "dotenv";
dotenv.config();

export const url = process.env.MONGODB_CONNECTION_URL || "";
export const serverPort = process.env.PORT || 4000;