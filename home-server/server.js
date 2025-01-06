const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();
const PORT = 5000;
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const groupRoutes = require('./routes/groupRoutes');
const priceRoutes = require('./routes/priceRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const productRoutes = require('./routes/productRoutes');
const { EventEmitter } = require('events');
const path = require('path');

EventEmitter.defaultMaxListeners = 15;

connectDB();

app.use(cors());
app.use(express.json());
app.use('/img', express.static(path.join(__dirname, '../client/src/img')));

app.use('/api/admin', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/schedule', scheduleRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/prices', priceRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});