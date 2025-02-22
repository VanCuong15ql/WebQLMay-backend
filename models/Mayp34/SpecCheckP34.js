const mongoose = require("mongoose");

const SpecCheckP34Schema = new mongoose.Schema({
  mayP34Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MayP34"
  },
  ngayThangNam: String,
  hinhThucKiemTra: String,
  dungCuKiemTra: String,
  doKinCaoAp: Number,
  dinhLuongCapCO2: Number,
  apLucVanXaKhiThuaLamViec: Number,
  apLucVanTuDongLamViec: Number,
  doKinHaAp: Number,
  ngayThangNapVoi: String,
  khoiLuongVoBinh: Number,
  khoiLuongVoiKhiKiemTra: Number,
  apLucChaiOxi: Number,
  phuTungThayThe: String,
  nguoiKiemTra: String,
  tieuDoiTruong: String,
  khoiLuongVoiKhiNap: Number
});

module.exports = mongoose.model("SpecCheckP34", SpecCheckP34Schema);