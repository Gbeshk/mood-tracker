const { default: mongoose } = require("mongoose");

const feelingSchema = new mongoose.Schema({
  mood: {
    type: Number,
    required: true,
  },
  feelingsArray: {
    type: [String],
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  sleep: {
    type: Number,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Feeling", feelingSchema);
