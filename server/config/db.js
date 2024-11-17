const mongoose = require('mongoose');
const { Admin } = require('../models');

require('dotenv').config();

const db = process.env.MONGO_URI;
const ADMIN_LOGIN = process.env.ADMIN_LOGIN;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('Соединение с БД установлено');

    const adminExists = await Admin.findOne({ login: ADMIN_LOGIN });
    if (!adminExists) {
      const newAdmin = new Admin({
        login: ADMIN_LOGIN,
        password: ADMIN_PASSWORD
      });
      await newAdmin.save();
      console.log('Администратор создан');
    }
  } catch (error) {
    console.error('Ошибка при подключении к БД:', error);
    process.exit(1); // Завершение процесса с ошибкой
  }
};

module.exports = connectDB;
