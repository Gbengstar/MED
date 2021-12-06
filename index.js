//require("dotenv").config()
import dotenv from "dotenv";
import express from "express";
import userRouter from "./route/users.js";
import patientRouter from "./route/patient.js";
import mongoose from "mongoose";
import connectDB from "./config/dbConn.js";
import auth from "./middleware/auth.js";

dotenv.config();
const app = express();

app.use(express.json());

// all user routes are passed to userRouter

app.use("/user", auth, userRouter);

// all pateint routes are passed to the patientRouter

app.use("/patient", patientRouter);

// route for the home page 

app.get("/", (req, res) => {
  console.log("app is running");
  res.send("happy to display this");
});

// connect to MongoDB
connectDB();

//the database connection emit an event which is handled below

mongoose.connection.once("open", () => {
  console.log("connected to database");

  app.listen(process.env.PORT, () =>
    console.log("server running at http://localhost:5001")
  );
});
