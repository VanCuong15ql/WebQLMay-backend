const mongoose = require("mongoose");

const PeriodicCheckMCSSchema = new mongoose.Schema({
  ngayThangNam: String,
  hinhThucKiemTra: String,
  suDongBoThietBi: String,
  doNhayVanKhiTho: Number,
  khangLucTho: Number,
  luuLuongDongKhiThoTuDong: Number,
  tanSoTho: Number,
  tgTreChuyenTuTiepOxiSangHoHapNhanTao: Number,
  tgTreDeEpTimKhiHoHapNhanTaoCuongBuc: Number,
  matNa: String,
  doKinMatNaFPS7000: String,
  haApHutCuaBoHutDomRaiMay: Number,
  nguoiKiemTra: String,
  chiHuy: String,
  mayCuuSinhId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MayCuuSinh"
  }
});

module.exports = mongoose.model("PeriodicCheckMCS", PeriodicCheckMCSSchema);