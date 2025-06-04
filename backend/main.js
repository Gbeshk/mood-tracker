const express = require("express");
const connectToDb = require("./config/connectToDb");
const authRouter = require("./auth/auth.router");
const isAuth = require("./middlewares/isAuth");
const feelingRouter = require("./feelings/feeling.router");
const userRouter = require("./user/user.router");
const cors = require("cors");

const app = express();

connectToDb();
app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/feelings", isAuth, feelingRouter);

app.listen(4000, () => {
  console.log("server running on http://localhost:4000");
});
