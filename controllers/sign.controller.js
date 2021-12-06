import bcrpyt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Mongoose } from "mongoose";
import employeeModel from "../model/employee.model.js";

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingEmployee = await employeeModel.findOne({ email });
    if (!existingEmployee)
      return res
        .status(404)
        .json({ message: "Sorry! Employee does not exist" });

    const isCorrectPassword = await bcrpyt.compare(
      "password",
      existingEmployee.password
    );
    if (!isCorrectPassword)
      return res.status(400).json({ message: "Sorry! Invalid Credential" });

    const token = jwt.sign(
      { email: existingEmployee.email, id: existingEmployee._id },
      secretToken,
      { expireIn: "1h" }
    );
    res.status(200).json({ result: existingEmployee, token });
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (req, res) => {
  const { email, password, confirmPassword } = req.body;

  try {
    const existingEmployee = await employeeModel.findOne({ email });
    if (existingEmployee)
      return res.status(400).json({
        message: "Employee already exist! Try again with fresh detail",
      });
    if (password !== confirmPassword)
      return res.status(400).json({ message: "Password do not match" });
    const hashedPass = await bcrpyt.hash(password, 12);
    const result = await employeeModel.create({email: email, password: hashedPass, name: `${firstname} ${lastName}`})
  } catch (error) {
    console.log(error);
  }
};
