const mongoose = require("mongoose");

const countSchema = new mongoose.Schema({
  values: {
    type: Map,
    of: Number,
    default: {},
  },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Count", countSchema);
