const mongoose = require("mongoose");

const ReplacementSchema = new mongoose.Schema({
  hoTen: String,
  soMay: String,
  linhKienThayThe: String,
  ngayThay: String,
  machineId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Machine"
  }
});

module.exports = mongoose.model("Replacement", ReplacementSchema);