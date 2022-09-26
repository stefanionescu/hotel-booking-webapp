import express from "express";

const router = express.Router();
router.get("/users", (req, res) => {
    res.send("Hello, this is the users endpoint");
});

export default router;
