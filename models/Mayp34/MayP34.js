const mongoose = require("mongoose");

const MayP34Schema = new mongoose.Schema({
  phongTram: String,
  soMay: String,
  noiSanXuat: String,
  namSanXuat: Number,
  namSuDung: Number
});

module.exports = mongoose.model("MayP34", MayP34Schema);