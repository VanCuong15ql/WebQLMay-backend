const express = require("express");
const MayP34 = require("../models/MayP34/MayP34");
const SpecCheckP34 = require("../models/MayP34/SpecCheckP34");
const router = express.Router();

// Lấy danh sách máy P34
router.get("/", async (req, res) => {
  try {
    const machines = await MayP34.find();
    res.json(machines);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy danh sách máy P34" });
  }
});

// Lấy thông tin máy P34 theo ID
router.get("/:id", async (req, res) => {
  try {
    const machine = await MayP34.findById(req.params.id);
    res.json(machine);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy thông tin máy P34" });
  }
});

// Thêm máy P34 mới
router.post("/", async (req, res) => {
  try {
    const newMachine = new MayP34(req.body);
    await newMachine.save();
    res.json(newMachine);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi thêm máy P34" });
  }
});

// Cập nhật máy P34
router.put("/:id", async (req, res) => {
  try {
    const updatedMachine = await MayP34.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedMachine);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi cập nhật máy P34" });
  }
});

// Xóa máy P34
router.delete("/:id", async (req, res) => {
  try {
    await MayP34.findByIdAndDelete(req.params.id);
    res.json({ message: "Đã xóa máy P34" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi xóa máy P34" });
  }
});

// Lấy danh sách kiểm tra định kỳ của máy P34
router.get("/:id/specChecks", async (req, res) => {
  try {
    const specChecks = await SpecCheckP34.find({ mayP34Id: req.params.id });
    res.json(specChecks);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi lấy thông tin kiểm tra định kỳ" });
  }
});

// Thêm kiểm tra định kỳ mới
router.post("/:id/specChecks", async (req, res) => {
  try {
    const newSpecCheck = new SpecCheckP34({ ...req.body, mayP34Id: req.params.id });
    await newSpecCheck.save();
    res.json(newSpecCheck);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi thêm kiểm tra định kỳ" });
  }
});

// Cập nhật kiểm tra định kỳ
router.put("/:id/specChecks/:specCheckId", async (req, res) => {
  try {
    const updatedSpecCheck = await SpecCheckP34.findByIdAndUpdate(req.params.specCheckId, req.body, { new: true });
    res.json(updatedSpecCheck);
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi cập nhật kiểm tra định kỳ" });
  }
});

// Xóa kiểm tra định kỳ
router.delete("/:id/specChecks/:specCheckId", async (req, res) => {
  try {
    await SpecCheckP34.findByIdAndDelete(req.params.specCheckId);
    res.json({ message: "Đã xóa kiểm tra định kỳ" });
  } catch (error) {
    res.status(500).json({ message: "Lỗi khi xóa kiểm tra định kỳ" });
  }
});

module.exports = router;