const { Router } = require("express");
const feelingModel = require("../models/feeling.model");
const userModel = require("../models/user.model");
const { default: mongoose } = require("mongoose");

const feelingRouter = Router();

feelingRouter.get("/", async (req, res) => {
  const feelings = await feelingModel.find();
  res.json(feelings);
});

feelingRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid ID" });
  }

  const feeling = await feelingModel.findById(id);

  if (!feeling) {
    return res.status(404).json({ error: "Feeling not found" });
  }

  res.json(feeling);
});

feelingRouter.post("/", async (req, res) => {
  const { mood, feelingsArray, text, sleep } = req.body;
  if (!mood || !feelingsArray || !text || !sleep)
    return res.status(400).json({ error: "required fields are missing " });
  const feeling = await feelingModel.create({
    mood,
    feelingsArray,
    text,
    sleep,
    author: req.userId,
  });
  const feelingObject = feeling.toObject();

  const user = await userModel.findByIdAndUpdate(req.userId, {
    $push: { feelings: feelingObject },
  });

  res.status(201).json({ message: "created successfully" });
});

module.exports = feelingRouter;
