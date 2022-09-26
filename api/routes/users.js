import express from "express";

import {
  updateUser,
  deleteUser,
  getUser,
  getUsers
} from "../controllers/user.js";
import {
  verifyToken,
  verifyUser,
  verifyAdmin
} from "../utils/verifyToken.js";

const router = express.Router();

// AUTH
/**
router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("You are now logged in");
});
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("You are logged in and you can edit your account");
});
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("You are logged in and you can edit any account");
});
**/

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET
router.get("/:id", verifyUser, getUser);

// GET ALL
router.get("/", verifyAdmin, getUsers);

export default router;
