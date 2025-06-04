const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowerCase: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    profilePic: {
      type: String,
      required: true,
    },
    feelings: {
      type: [Object],
      ref: "Feeling",
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
