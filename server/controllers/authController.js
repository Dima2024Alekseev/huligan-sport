const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const RefreshToken = require('../models/RefreshToken');
const { JWT_SECRET, JWT_REFRESH_SECRET } = process.env;

exports.login = async (req, res) => {
  const { login, password } = req.body;

  try {
    const admin = await Admin.findOne({ login });
    if (!admin) {
      return res.status(401).json({ error: 'Неверный логин или пароль' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Неверный логин или пароль' });
    }

    const token = jwt.sign({ id: admin._id, role: 'admin' }, JWT_SECRET, { expiresIn: '60m' });
    const refreshToken = jwt.sign({ id: admin._id, role: 'admin' }, JWT_REFRESH_SECRET, { expiresIn: '7d' });

    // Удаление старых refresh токенов для этого администратора
    await RefreshToken.deleteMany({ adminId: admin._id });

    // Сохранение нового refresh токена в базе данных
    await RefreshToken.create({
      token: refreshToken,
      adminId: admin._id,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 дней
    });

    res.json({ token });
  } catch (error) {
    console.error('Ошибка при авторизации:', error);
    res.status(500).json({ error: 'Ошибка при авторизации' });
  }
};

exports.refreshToken = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ error: 'Токен не предоставлен' });
  }

  try {
    const refreshTokenDoc = await RefreshToken.findOne({ token: refreshToken });
    if (!refreshTokenDoc) {
      return res.status(401).json({ error: 'Недействительный токен' });
    }

    // Проверка срока действия refresh токена
    if (new Date() > refreshTokenDoc.expires) {
      return res.status(401).json({ error: 'Токен истек' });
    }

    const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET);
    const token = jwt.sign({ id: decoded.id, role: decoded.role }, JWT_SECRET, { expiresIn: '60m' });

    // Удаление старого refresh токена и создание нового
    await RefreshToken.findByIdAndDelete(refreshTokenDoc._id);
    const newRefreshToken = jwt.sign({ id: decoded.id, role: decoded.role }, JWT_REFRESH_SECRET, { expiresIn: '7d' });
    await RefreshToken.create({
      token: newRefreshToken,
      adminId: decoded.id,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 дней
    });

    res.json({ token, refreshToken: newRefreshToken });
  } catch (error) {
    return res.status(401).json({ error: 'Недействительный токен' });
  }
};
