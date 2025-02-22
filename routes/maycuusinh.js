const express = require("express");
const MayCuuSinh = require("../models/Maycuusinh/MayCuuSinh");
const Activity = require("../models/Maycuusinh/ActivityMCS");
const Repair = require("../models/Maycuusinh/RepairMCS");
const PeriodicCheck = require("../models/Maycuusinh/PeriodicCheckMCS");
const router = express.Router();

// Lấy danh sách máy cứu sinh
router.get("/", async (req, res) => {
  try {
    const mayCuuSinh = await MayCuuSinh.find();
    res.json(mayCuuSinh);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy danh sách máy cứu sinh" });
  }
});

// Thêm máy cứu sinh mới
router.post("/", async (req, res) => {
  try {
    const newMayCuuSinh = new MayCuuSinh(req.body);
    await newMayCuuSinh.save();
    res.json(newMayCuuSinh);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi thêm máy cứu sinh" });
  }
});

// Cập nhật thông tin máy cứu sinh
router.put("/:id", async (req, res) => {
  try {
    const updatedMayCuuSinh = await MayCuuSinh.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedMayCuuSinh);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi cập nhật máy cứu sinh" });
  }
});

// Xóa máy cứu sinh
router.delete("/:id", async (req, res) => {
  try {
    await MayCuuSinh.findByIdAndDelete(req.params.id);
    res.json({ message: "Đã xóa máy cứu sinh" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi xóa máy cứu sinh" });
  }
});

// Lấy thông tin máy cứu sinh theo ID
router.get("/:id", async (req, res) => {
  try {
    const mayCuuSinh = await MayCuuSinh.findById(req.params.id);
    if (!mayCuuSinh) {
      return res.status(404).json({ message: "Máy cứu sinh không tồn tại" });
    }
    res.json(mayCuuSinh);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy thông tin máy cứu sinh" });
  }
});

// Lấy danh sách hoạt động của máy cứu sinh
router.get("/:id/activities", async (req, res) => {
  try {
    const activities = await Activity.find({ mayCuuSinhId: req.params.id });
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy thông tin hoạt động" });
  }
});

// Thêm hoạt động mới
router.post("/:id/activities", async (req, res) => {
  try {
    const newActivity = new Activity({ ...req.body, mayCuuSinhId: req.params.id });
    await newActivity.save();
    res.json(newActivity);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi thêm hoạt động" });
  }
});

// Xóa hoạt động
router.delete("/:id/activities/:activityId", async (req, res) => {
  try {
    await Activity.findByIdAndDelete(req.params.activityId);
    res.json({ message: "Đã xóa hoạt động" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi xóa hoạt động" });
  }
});

// Cập nhật thông tin hoạt động
router.put("/:id/activities/:activityId", async (req, res) => {
  try {
    const updatedActivity = await Activity.findByIdAndUpdate(req.params.activityId, req.body, { new: true });
    res.json(updatedActivity);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi cập nhật hoạt động" });
  }
});

// Lấy danh sách sửa chữa của máy cứu sinh
router.get("/:id/repairs", async (req, res) => {
  try {
    const repairs = await Repair.find({ mayCuuSinhId: req.params.id });
    res.json(repairs);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy thông tin sửa chữa" });
  }
});

// Thêm sửa chữa mới
router.post("/:id/repairs", async (req, res) => {
  try {
    const newRepair = new Repair({ ...req.body, mayCuuSinhId: req.params.id });
    await newRepair.save();
    res.json(newRepair);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi thêm sửa chữa" });
  }
});

// Xóa sửa chữa
router.delete("/:id/repairs/:repairId", async (req, res) => {
  try {
    await Repair.findByIdAndDelete(req.params.repairId);
    res.json({ message: "Đã xóa sửa chữa" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi xóa sửa chữa" });
  }
});

// Cập nhật thông tin sửa chữa
router.put("/:id/repairs/:repairId", async (req, res) => {
  try {
    const updatedRepair = await Repair.findByIdAndUpdate(req.params.repairId, req.body, { new: true });
    res.json(updatedRepair);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi cập nhật sửa chữa" });
  }
});

// Lấy danh sách kiểm tra định kỳ của máy cứu sinh
router.get("/:id/periodicChecks", async (req, res) => {
  try {
    const periodicChecks = await PeriodicCheck.find({ mayCuuSinhId: req.params.id });
    res.json(periodicChecks);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy thông tin kiểm tra định kỳ" });
  }
});

// Thêm kiểm tra định kỳ mới
router.post("/:id/periodicChecks", async (req, res) => {
  try {
    const newPeriodicCheck = new PeriodicCheck({ ...req.body, mayCuuSinhId: req.params.id });
    await newPeriodicCheck.save();
    res.json(newPeriodicCheck);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi thêm kiểm tra định kỳ" });
  }
});

// Xóa kiểm tra định kỳ
router.delete("/:id/periodicChecks/:periodicCheckId", async (req, res) => {
  try {
    await PeriodicCheck.findByIdAndDelete(req.params.periodicCheckId);
    res.json({ message: "Đã xóa kiểm tra định kỳ" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi xóa kiểm tra định kỳ" });
  }
});

// Cập nhật thông tin kiểm tra định kỳ
router.put("/:id/periodicChecks/:periodicCheckId", async (req, res) => {
  try {
    const updatedPeriodicCheck = await PeriodicCheck.findByIdAndUpdate(req.params.periodicCheckId, req.body, { new: true });
    res.json(updatedPeriodicCheck);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi cập nhật kiểm tra định kỳ" });
  }
});

module.exports = router;