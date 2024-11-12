require('events').EventEmitter.defaultMaxListeners = 20;
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const NodeCache = require('node-cache');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const app = express();
const PORT = 5000;
const myCache = new NodeCache({ stdTTL: 300 }); // Кэширование данных на 5 минут

const ACCESS_TOKEN = process.env.ACCESS_TOKEN;
const GROUP_ID = process.env.GROUP_ID;
const FILE_PATH = path.join(__dirname, '..', 'client', 'src', 'data', 'posts.json'); // Путь к файлу для сохранения постов
const db = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const ADMIN_LOGIN = process.env.ADMIN_LOGIN;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

// Подключение к базе данных MongoDB
mongoose
  .connect(db)
  .then(async () => {
    console.log('Соединение с БД установлено');

    // Проверка наличия администратора в базе данных
    const adminExists = await Admin.findOne({ login: ADMIN_LOGIN });
    if (!adminExists) {
      const newAdmin = new Admin({
        login: ADMIN_LOGIN,
        password: ADMIN_PASSWORD // Пароль будет хеширован перед сохранением
      });
      await newAdmin.save();
      console.log('Администратор создан');
    }

    // Добавление текущего расписания в базу данных
    const initialSchedule = [
      { time: "17:00", pn: "Дети соревновательная группа", vt: "", sr: "Дети соревновательная группа", ct: "", pt: "Дети соревновательная группа", sb: "" },
      { time: "18:00", pn: "", vt: "Дети младшая группа", sr: "", ct: "Дети младшая группа", pt: "", sb: "Дети средняя группа / Дети младшая группа" },
      { time: "19:00", pn: "ММА взрослые", vt: "Дети средняя группа", sr: "ММА взрослые", ct: "Дети средняя группа", pt: "ММА взрослые", sb: "" },
      { time: "19:30", pn: "", vt: "Женская группа", sr: "", ct: "Женская группа", pt: "", sb: "" },
    ];

    try {
      await Schedule.deleteMany({}); // Удаление всех записей
      await Schedule.insertMany(initialSchedule); // Вставка новых записей
      console.log('Расписание инициализировано');
    } catch (error) {
      console.error('Ошибка при инициализации расписания:', error);
    }
  })
  .catch((error) => console.log(error));

app.use(cors());
app.use(express.json());

// Модель для постов
const postSchema = new mongoose.Schema({
  id: Number,
  text: String,
  photoUrls: [String]
});
const Post = mongoose.model('Post', postSchema);

// Модель для администратора
const adminSchema = new mongoose.Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

adminSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const Admin = mongoose.model('Admin', adminSchema);

// Модель для расписания
const scheduleSchema = new mongoose.Schema({
  time: String,
  pn: String,
  vt: String,
  sr: String,
  ct: String,
  pt: String,
  sb: String
});
const Schedule = mongoose.model('Schedule', scheduleSchema);

// Модель для пользователей
const userSchema = new mongoose.Schema({
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'user' }
});

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model('User', userSchema);

// Модель для журнала посещаемости
const attendanceSchema = new mongoose.Schema({
  date: String,
  studentName: String,
  attendance: Boolean
});
const Attendance = mongoose.model('Attendance', attendanceSchema);

// Фильтр для удаления ссылок вида [id... из текста
const removeLinksFromText = (text) => {
  if (!text) return text;
  return text.replace(/\[id\d+\|([^\]]+)\]/g, '$1');
};

// Маршрут для получения постов
app.get('/api/posts', async (req, res) => {
  try {
    const cacheKey = 'vk_posts';
    const cachedData = myCache.get(cacheKey);

    if (cachedData) {
      return res.json(cachedData);
    }

    const posts = await Post.find({});
    const postsJSON = posts.map(post => post.toObject()); // Преобразование объектов Mongoose в простые объекты JavaScript

    // Фильтрация постов, которые содержат фотографии больше одной фотографии и ссылки в тексте типа club
    const filteredPosts = postsJSON.filter(post => {
      return post.photoUrls && post.photoUrls.length > 0 && post.text && !/\[club\d+\|/.test(post.text);
    });

    myCache.set(cacheKey, filteredPosts);
    res.json(filteredPosts);
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
    res.status(500).json({ error: 'Ошибка при получении данных' });
  }
});

// Функция для периодической проверки новых новостей
const checkForNewPosts = async () => {
  try {
    const response = await axios.get(`https://api.vk.com/method/wall.get`, {
      params: {
        owner_id: `-${GROUP_ID}`,
        count: 100, // Количество постов для получения
        access_token: ACCESS_TOKEN,
        v: '5.131'
      }
    });

    const posts = response.data.response.items;
    const postsWithPhotos = await Promise.all(posts.map(async post => {
      const textWithoutLinks = removeLinksFromText(post.text);
      if (post.attachments) {
        const photoAttachments = post.attachments.filter(attachment => attachment.type === 'photo');
        const photoUrls = photoAttachments.map(photo => photo.photo.sizes.pop().url);
        return { ...post, text: textWithoutLinks, photoUrls };
      }
      return { ...post, text: textWithoutLinks };
    }));

    // Обновление или вставка данных в MongoDB
    const bulkOps = postsWithPhotos.map(post => ({
      updateOne: {
        filter: { id: post.id },
        update: post,
        upsert: true
      }
    }));

    await Post.bulkWrite(bulkOps);

    // Фильтрация постов исключающая посты с видео
    const filteredPosts = postsWithPhotos.filter(post => {
      return !post.attachments || !post.attachments.some(attachment => attachment.type === 'video');
    });

    const firstFivePosts = filteredPosts.slice(0, 6);

    // Запись данных в файл для главной странице в новостном блоке(временное хранилище)
    fs.writeFileSync(FILE_PATH, JSON.stringify(firstFivePosts, null, 2));

    myCache.set('vk_posts', postsWithPhotos); // Кэширование данных
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
};

// Запуск периодической проверки новых новостей каждые 30 секунд
setInterval(checkForNewPosts, 30000);

// Middleware для проверки токена и роли
const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'Токен не предоставлен' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Недействительный токен' });
  }
};

const adminMiddleware = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Доступ запрещен' });
  }
  next();
};

// Маршрут для авторизации администратора
app.post('/api/admin/login', async (req, res) => {
  const { login, password } = req.body;

  try {
    const admin = await Admin.findOne({ login });
    if (!admin) {
      return res.status(401).json({ error: '' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ error: '' });
    }

    const token = jwt.sign({ id: admin._id, role: 'admin' }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Ошибка при авторизации:', error);
    res.status(500).json({ error: 'Ошибка при авторизации' });
  }
});

// Маршрут для получения расписания
app.get('/api/schedule', async (req, res) => {
  try {
    const schedule = await Schedule.find({});
    res.json(schedule);
  } catch (error) {
    console.error('Ошибка при получении расписания:', error);
    res.status(500).json({ error: 'Ошибка при получении расписания' });
  }
});

// Маршрут для обновления расписания
app.put('/api/schedule', authMiddleware, adminMiddleware, async (req, res) => {
  const { schedule } = req.body;

  try {
    await Schedule.deleteMany({}); // Удаление всех записей
    await Schedule.insertMany(schedule); // Вставка новых записей
    res.json({ message: 'Расписание обновлено' });
  } catch (error) {
    console.error('Ошибка при обновлении расписания:', error);
    res.status(500).json({ error: 'Ошибка при обновлении расписания' });
  }
});

// Маршрут для получения пользователей
app.get('/api/users', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error('Ошибка при получении пользователей:', error);
    res.status(500).json({ error: 'Ошибка при получении пользователей' });
  }
});

// Маршрут для получения статистики
app.get('/api/statistics', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const userCount = await User.countDocuments({});
    const postCount = await Post.countDocuments({});
    const scheduleCount = await Schedule.countDocuments({});
    res.json({ userCount, postCount, scheduleCount });
  } catch (error) {
    console.error('Ошибка при получении статистики:', error);
    res.status(500).json({ error: 'Ошибка при получении статистики' });
  }
});

// Маршрут для получения данных посещаемости
app.get('/api/attendance', async (req, res) => {
  try {
    const attendanceData = await Attendance.find({});
    res.json(attendanceData);
  } catch (error) {
    console.error('Ошибка при получении данных посещаемости:', error);
    res.status(500).json({ error: 'Ошибка при получении данных посещаемости' });
  }
});

// Маршрут для обновления данных посещаемости
app.put('/api/attendance', authMiddleware, adminMiddleware, async (req, res) => {
  const { attendance } = req.body;

  try {
    await Attendance.deleteMany({}); // Удаление всех записей
    await Attendance.insertMany(attendance); // Вставка новых записей
    res.json({ message: 'Журнал посещаемости обновлен' });
  } catch (error) {
    console.error('Ошибка при обновлении журнала посещаемости:', error);
    res.status(500).json({ error: 'Ошибка при обновлении журнала посещаемости' });
  }
});

// Маршрут для добавления записи в журнал посещаемости
app.post('/api/attendance', authMiddleware, adminMiddleware, async (req, res) => {
  const { date, studentName, attendance } = req.body;

  try {
    const newEntry = new Attendance({ date, studentName, attendance });
    await newEntry.save();
    res.json({ message: 'Запись добавлена' });
  } catch (error) {
    console.error('Ошибка при добавлении записи:', error);
    res.status(500).json({ error: 'Ошибка при добавлении записи' });
  }
});

// Маршрут для удаления записи из журнала посещаемости
app.delete('/api/attendance/:id', authMiddleware, adminMiddleware, async (req, res) => {
  const { id } = req.params;

  try {
    await Attendance.findByIdAndDelete(id);
    res.json({ message: 'Запись удалена' });
  } catch (error) {
    console.error('Ошибка при удалении записи:', error);
    res.status(500).json({ error: 'Ошибка при удалении записи' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
