"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const url = process.env.MONGODB_CONNECTION_URL || "";
mongoose_1.default.set("strictQuery", true);
const Connection = async () => {
    try {
        await mongoose_1.default.connect(url);
        console.log("Juice Bar Database is Running");
    }
    catch (error) {
        console.log("Error while connecting with DB");
    }
};
exports.default = Connection;
