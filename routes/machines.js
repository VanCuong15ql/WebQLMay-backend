const express = require("express");
const Machine = require("../models/Machines");
const Activity = require("../models/Activity");
const Replacement = require("../models/Replacement");
const MachineSpec = require("../models/MachineSpec");
const router = express.Router();

// Lấy danh sách máy thở
router.get("/", async (req, res) => {
  const machines = await Machine.find();
  res.json(machines);
});

// Thêm máy mới
router.post("/", async (req, res) => {
  const newMachine = new Machine(req.body);
  await newMachine.save();
  res.json(newMachine);
});

// Cập nhật thông tin máy
router.put("/:id", async (req, res) => {
  const updatedMachine = await Machine.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedMachine);
});

// Xóa máy
router.delete("/:id", async (req, res) => {
  await Machine.findByIdAndDelete(req.params.id);
  res.json({ message: "Đã xóa máy" });
});

// Lấy thông tin máy thở theo ID
router.get("/:id", async (req, res) => {
  try {
    const machine = await Machine.findById(req.params.id);
    if (!machine) {
      return res.status(404).json({ message: "Máy thở không tồn tại" });
    }
    res.json(machine);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy thông tin máy thở" });
  }
});

// Lấy danh sách hoạt động của máy thở
router.get("/:id/activities", async (req, res) => {
  try {
    const activities = await Activity.find({ machineId: req.params.id });
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy thông tin hoạt động" });
  }
});

// Thêm hoạt động mới
router.post("/:id/activities", async (req, res) => {
  try {
    const newActivity = new Activity({ ...req.body, machineId: req.params.id });
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

// Lấy danh sách linh kiện thay thế của máy thở
router.get("/:id/replacements", async (req, res) => {
  try {
    const replacements = await Replacement.find({ machineId: req.params.id });
    res.json(replacements);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy thông tin linh kiện thay thế" });
  }
});

// Thêm linh kiện thay thế mới
router.post("/:id/replacements", async (req, res) => {
  try {
    const newReplacement = new Replacement({ ...req.body, machineId: req.params.id });
    await newReplacement.save();
    res.json(newReplacement);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi thêm linh kiện thay thế" });
  }
});

// Xóa linh kiện thay thế
router.delete("/:id/replacements/:replacementId", async (req, res) => {
  try {
    await Replacement.findByIdAndDelete(req.params.replacementId);
    res.json({ message: "Đã xóa linh kiện thay thế" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi xóa linh kiện thay thế" });
  }
});
// Cập nhật thông tin linh kiện thay thế
router.put("/:id/replacements/:replacementId", async (req, res) => {
  try {
    const updatedReplacement = await Replacement.findByIdAndUpdate(req.params.replacementId, req.body, { new: true });
    res.json(updatedReplacement);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi cập nhật linh kiện thay thế" });
  }
});

// Lấy danh sách thông số máy thở
router.get("/:id/specs", async (req, res) => {
  try {
    const specs = await MachineSpec.find({ machineId: req.params.id });
    res.json(specs);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy thông tin thông số máy thở" });
  }
});

// Thêm thông số máy thở mới
router.post("/:id/specs", async (req, res) => {
  try {
    const newSpec = new MachineSpec({ ...req.body, machineId: req.params.id });
    await newSpec.save();
    res.json(newSpec);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi thêm thông số máy thở" });
  }
});

// Xóa thông số máy thở
router.delete("/:id/specs/:specId", async (req, res) => {
  try {
    await MachineSpec.findByIdAndDelete(req.params.specId);
    res.json({ message: "Đã xóa thông số máy thở" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi xóa thông số máy thở" });
  }
});
// chinh sua thong so may tho
router.put("/:id/specs/:specId", async (req, res) => {
  try {
    const updatedSpec = await MachineSpec.findByIdAndUpdate(req.params.specId, req.body, { new: true });
    res.json(updatedSpec);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi cập nhật thông số máy thở" });
  }
});
module.exports = router;