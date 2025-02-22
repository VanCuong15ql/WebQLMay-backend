const mongoose = require("mongoose");

const MayCuuSinhSchema = new mongoose.Schema({
  phongTram: String,
  tieuDoi: String,
  soMay: String,
  noiSanXuat: String,
  namSanXuat: Number,
  namSuDung: Number
});

module.exports = mongoose.model("MayCuuSinh", MayCuuSinhSchema);