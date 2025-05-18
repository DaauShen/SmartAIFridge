const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  base64: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Image", imageSchema);
