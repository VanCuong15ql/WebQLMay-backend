const express = require('express');
const User = require('../models/User');
const router = express.Router();



// Lấy danh sách người dùng
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
    console.log('Get users');
  } catch (err) {
    res.status(500).json({ message: 'Lỗi server!' });
  }
});

// Cập nhật quyền người dùng
router.put('/users/:id/role', async (req, res) => {
  const { role } = req.body;
  try {
    const user = await User.findByIdAndUpdate(req.params.id, { role }, { new: true });
    res.json(user);
    console.log('Update', user.username, 'role to', role);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi server!' });
  }
});

// Xóa người dùng
router.delete('/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'Đã xóa người dùng' });
    console.log('Delete user', req.params.id);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi server!' });
  }
});

module.exports = router;