const { Router } = require("express");
const userModel = require("../models/user.model");

const userRouter = Router();

userRouter.get("/", async (req, res) => {
  const users = await userModel.find();
  res.json(users);
});

userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  const user = await userModel
    .findById(id)
    .select("-password");
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});

module.exports = userRouter;
