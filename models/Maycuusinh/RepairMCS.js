const mongoose = require("mongoose");

const RepairMCSSchema = new mongoose.Schema({
  ngayThangNam: String,
  noiDungSuaChua: String,
  nguoiLam: String,
  mayCuuSinhId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MayCuuSinh"
  }
});

module.exports = mongoose.model("RepairMCS", RepairMCSSchema);