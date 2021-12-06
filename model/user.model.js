import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  surname: { type: String, required: true },
  firstName: { type: String, required: true },
  age: Number,
  phoneNumber: { type: String, required: true },
  nextOfKin: {
    surname: { type: String, required: true },
    firstName: { type: String, required: true },
    age: Number,
    phoneNumber: { type: String, required: true },
  },
  LGA: String,
  nationality: string,
  address: {
    street: { type: String, required: true },
  }
});
module.exports = mongoose.model("user", userSchema)