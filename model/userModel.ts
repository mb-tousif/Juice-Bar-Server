import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

export const userSchema = new mongoose.Schema(
  {
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
      validate: [validator.isEmail, "Provide a valid Email"],
      trim: true,
      unique: true,
      required: [true, "Email address is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      validate: {
        validator: (value: string) =>
          validator.isStrongPassword(value, {
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
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const password = this.password;
  const hashedPassword = bcrypt.hashSync(password, 12);
  this.password = hashedPassword;

  next();
});

userSchema.methods.comparePassword = function (password:string, hash:string) {
  const isPasswordValid = bcrypt.compareSync(password, hash);
  return isPasswordValid;
};

const Users = mongoose.model("user", userSchema);

export default Users;
