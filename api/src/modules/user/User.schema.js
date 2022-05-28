import mongoose from "mangoose";

const UserSchema = new mangoose.Schema({
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
});
