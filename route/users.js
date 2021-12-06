import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUserId,
} from "../controllers/users.js";

const router = express.Router();

// create GET request for all users

router.get("/", getUser);

// create POST request to create a user

router.post("/", createUser);

// crate GET request to get one user with its unique ID

router.get("/:id", getUserId);

router.delete("/:id", deleteUser);

// patch method is uesd to modify a user
// put is used to overide the entired data of a user

router.patch("/:id");
export default router;
