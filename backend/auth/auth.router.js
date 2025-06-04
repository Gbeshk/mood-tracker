const { Router } = require("express");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const isAuth = require("../middlewares/isAuth");
const { upload } = require("../config/claudinary.config");
require("dotenv").config();

const authRouter = Router();

authRouter.post("/sign-up", upload.single("avatar"), async (req, res) => {
  const { fullName, email, password } = req.body;
  const profilePic =
    req.file?.path ||
    "https://res.cloudinary.com/dklt1we0a/image/upload/v1748872082/uploads/se7mo5dg56qzkvextvsh.svg";

  if (!fullName || !email || !password || !profilePic)
    return res.status(400).json({ error: "fields are required" });

  const existUser = await userModel.findOne({ email: email.toLowerCase() });

  if (existUser) {
    return res.status(400).json({ error: "user already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await userModel.create({
    fullName,
    email: email.toLowerCase(),
    profilePic,
    password: hashedPassword,
  });

  res.status(201).json({ message: "user created successfully" });
});

authRouter.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ error: "fields ara requred" });

  const existUser = await userModel
    .findOne({ email: email.toLowerCase() })
    .select("password");
  if (!existUser) {
    return res.status(400).json({ error: "email or pasword is incorrect" });
  }

  const isPassEqual = await bcrypt.compare(password, existUser.password);
  if (!isPassEqual) {
    return res.status(400).json({ error: "email or pasword is incorrect" });
  }

  const payLoad = {
    userId: existUser._id,
  };

  const accessToken = jwt.sign(payLoad, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({
    id: existUser._id,
    accessToken,
  });
});

authRouter.get("/current-user", isAuth, async (req, res) => {
  const user = await userModel.findById(req.userId);
  res.json(user);
});

authRouter.put("/current-user", isAuth, async (req, res) => {
  const { fullName, avatar } = req.body;
  try {
    const user = await userModel.findByIdAndUpdate(
      req.userId,
      { ...(fullName && { fullName }), ...(avatar && { profilePic: avatar }) },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to update user" });
  }
});
authRouter.post("/check-email", async (req, res) => {
  const { email } = req.body;
  const existingUser = await userModel.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ error: "Email is already in use" });
  }

  res.status(200).json({ message: "Email is not used" });
});

module.exports = authRouter;
