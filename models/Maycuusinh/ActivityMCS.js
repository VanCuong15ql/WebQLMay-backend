const mongoose = require("mongoose");

const ActivityMCSSchema = new mongoose.Schema({
  ngayThangNam: String,
  lyDoSuDung: String,
  thoiGianSuDung: Number,
  nguoiSuDung: String,
  mayCuuSinhId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MayCuuSinh"
  }
});

module.exports = mongoose.model("ActivityMCS", ActivityMCSSchema);