const mongoose = require("mongoose");

const ActivitySchema = new mongoose.Schema({
  ngayThangNam: String,
  soMay: String,
  lyDoSuDung: String,
  thoiGianSuDung: Number,
  nguoiSuDung: String,
  machineId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Machine"
  }
});

// Virtual field for total usage time
ActivitySchema.virtual('totalUsageTime').get(function() {
  return this.thoiGianSuDung; // Assuming thoiGianSuDung is the total usage time for this activity
});

module.exports = mongoose.model("Activity", ActivitySchema);