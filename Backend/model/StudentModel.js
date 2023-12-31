import mongoose from "mongoose";

var StudentSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    location: String,
    age: Number,
  },
  { timestamps: true }
);

export const Student = mongoose.model("Student", StudentSchema);
