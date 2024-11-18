const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const { JWT_SECRET } = process.env;

exports.login = async (req, res) => {
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

    const token = jwt.sign({ id: admin._id, role: 'admin' }, JWT_SECRET, { expiresIn: '30d' });
    res.json({ token });
  } catch (error) {
    console.error('Ошибка при авторизации:', error);
    res.status(500).json({ error: 'Ошибка при авторизации' });
  }
};
