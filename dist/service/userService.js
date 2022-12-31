"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.findUserByEmail = exports.signupService = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
const signupService = async (userInfo) => {
    const result = await userModel_1.default.create(userInfo);
    return result;
};
exports.signupService = signupService;
const findUserByEmail = async (email) => {
    return await userModel_1.default.findOne({ email });
};
exports.findUserByEmail = findUserByEmail;
const getUsers = async () => {
    const result = await userModel_1.default.find({});
    return result;
};
exports.getUsers = getUsers;
