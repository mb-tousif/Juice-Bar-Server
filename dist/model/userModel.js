"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.userSchema = new mongoose_1.default.Schema({
    id: String,
    fullName: {
        type: String,
        required: [true, "Please provide a first name"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large"],
    },
    email: {
        type: String,
        validate: [validator_1.default.isEmail, "Provide a valid Email"],
        trim: true,
        unique: true,
        required: [true, "Email address is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        validate: {
            validator: (value) => validator_1.default.isStrongPassword(value, {
                minLength: 6,
                minLowercase: 3,
                minNumbers: 1,
                minUppercase: 1,
                minSymbols: 1,
            }),
            message: "Password {VALUE} is not strong enough.",
        },
    },
    role: {
        type: String,
        default: "client",
        enum: {
            values: ["client", "Admin"],
            message: "{VALUE} is not a correct Role for user!",
        },
        required: [true, "Role is required"],
    },
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active",
    },
}, {
    timestamps: true,
});
exports.userSchema.pre("save", function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    const password = this.password;
    const hashedPassword = bcrypt_1.default.hashSync(password, 12);
    this.password = hashedPassword;
    next();
});
exports.userSchema.methods.comparePassword = function (password, hash) {
    const isPasswordValid = bcrypt_1.default.compareSync(password, hash);
    return isPasswordValid;
};
const Users = mongoose_1.default.model("user", exports.userSchema);
exports.default = Users;
