"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUser = exports.login = exports.signup = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const userService_1 = require("../service/userService");
const signup = async (req, res) => {
    try {
        const userInfo = req.body;
        const result = await (0, userService_1.signupService)(userInfo);
        await result.save();
        res.status(200).json({
            status: "success",
            message: "Successfully signed up",
        });
    }
    catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Signed up Failed",
        });
    }
};
exports.signup = signup;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                status: "fail",
                error: "Please provide your credentials",
            });
        }
        const user = await (0, userService_1.findUserByEmail)(email);
        if (!user) {
            return res.status(401).json({
                status: "fail",
                error: "No user found. Please create an account",
            });
        }
        const isPasswordValid = await bcrypt_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(403).json({
                status: "fail",
                error: "Password is not correct",
            });
        }
        if (user.status == "Inactive") {
            return res.status(401).json({
                status: "fail",
                error: "User is not an active user.",
            });
        }
        const { password: pwd, ...others } = user.toObject();
        res.status(200).json({
            status: "success",
            message: "Successfully logged in",
            user: others,
        });
    }
    catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Logged in Failed!",
        });
    }
};
exports.login = login;
const getAllUser = async (req, res) => {
    try {
        const users = await (0, userService_1.getUsers)();
        res.status(200).json({
            status: "success",
            data: users,
        });
    }
    catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Could not find any Users",
        });
    }
};
exports.getAllUser = getAllUser;
