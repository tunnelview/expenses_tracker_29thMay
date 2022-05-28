import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
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
      minLength: [5, "Password must be more than 5 characters"], // mongo DB validation
      maxLength: [50, "Name must be less than 50 characters"],
    },
  },
  { timestamps: true }
); // it will create created app date and updated date

export default mongoose.model("User", UserSchema); //users We just created a new schema called
// UserSchema, now time to convert that schema into a real table in our database
