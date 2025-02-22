const mongoose = require("mongoose");

const MachineSchema = new mongoose.Schema({
  hoTen: String,
  soMay: String,
  bienChe: String,
  phongTram: String,
  soSeri: String,
  namSanXuat: Number,
  nuocSanXuat: String,
});

module.exports = mongoose.model("Machine", MachineSchema);
