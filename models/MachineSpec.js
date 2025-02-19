const mongoose = require("mongoose");

const MachineSpecSchema = new mongoose.Schema({
  soMay: String,
  dangKiem: String,
  ngayThang: String,
  canhBaoApSuat: Number,
  apLucVanThoVao: Number,
  apLucVanThoRa: Number,
  apLucVanXaNuoc: Number,
  doKinMay: Number,
  apLucVanXaKhiThua: Number,
  kiemTraRoRiApSuatCao: String,
  dinhLuongCungCapOxi: Number,
  haApVanTuDong: Number,
  vanSuCoLamViec: String,
  canhBaoApSuatDu: String,
  dungLuongPin: String,
  ngayNapVoi: String,
  matNa: String,
  nguoiKiem: String,
  chiHuy: String,
  ghiChu: String,
  machineId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Machine"
  }
});

module.exports = mongoose.model("MachineSpec", MachineSpecSchema);