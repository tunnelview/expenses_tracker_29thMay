import express from "express";
import { createTable } from "../modules/User.model.js";

const router = express.Router();

router.post("/", async (req, res) => {
  console.log(req.body);

  //send data to db query
  const result = await createTable(req.body);
  console.log(result);
  res.json({
    status: "success",
    message: "user created successfully",
  });
});

export default router;
