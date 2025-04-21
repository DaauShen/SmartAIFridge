const mongoose = require("mongoose");

const fridgeStatsSchema = new mongoose.Schema({
  temperature: Number,
  humidity: Number,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("FridgeStats", fridgeStatsSchema);
