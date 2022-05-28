import mongoose from "mangoose";

const UserSchema = new mangoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLength: [50, "Name must be less than 50 characters"],
    },
    email: {
      type: String,
      required: true,
      maxLength: [50, "Name must be less than 50 characters"],
    },
    password: {
      type: String,
      required: true,
      minLength: [5, "Password must be more than 5 characters"],
      maxLength: [50, "Name must be less than 50 characters"],
    },
  },
  { timestamps: true }
); // it will create created app date and updated date
