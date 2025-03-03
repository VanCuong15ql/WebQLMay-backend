require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const machineRoutes = require('./routes/machines'); // Import route máy thở
const machineCuuSinhRoutes = require('./routes/maycuusinh'); // Import route máy cứu sinh
const machineP34Routes = require('./routes/mayP34'); // Import route máy P34
const adminRoutes = require('./routes/admin');
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/auth', authRoutes);
app.use('/machines', machineRoutes); // Đăng ký API máy thở
app.use('/maycuusinh', machineCuuSinhRoutes); // Đăng ký API máy cứu sinh
app.use('/mayP34', machineP34Routes); // Đăng ký API máy P34
app.use('/admin', adminRoutes);// API admin
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
