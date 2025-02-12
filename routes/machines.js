const express = require("express");
const Machine = require("../models/Machines");

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

module.exports = router;