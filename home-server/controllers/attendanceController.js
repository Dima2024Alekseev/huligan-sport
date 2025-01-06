const Attendance = require('../models/Attendance');
const mongoose = require('mongoose');

exports.getAttendance = async (req, res) => {
  const { month, group } = req.query;

  try {
    let filter = {};
    if (month) {
      filter.month = parseInt(month, 10);
    }
    if (group) {
      filter.group = group;
    }

    const attendanceData = await Attendance.find(filter).populate('group', 'name');
    res.json(attendanceData);
  } catch (error) {
    console.error('Ошибка при получении данных посещаемости:', error);
    res.status(500).json({ error: 'Ошибка при получении данных посещаемости' });
  }
};

exports.updateAttendance = async (req, res) => {
  const { attendance } = req.body;

  try {
    for (const entry of attendance) {
      const existingEntry = await Attendance.findOne({ _id: entry._id });
      if (existingEntry) {
        await Attendance.updateOne({ _id: existingEntry._id }, { $set: entry });
      } else {
        await Attendance.create(entry);
      }
    }
    res.json({ message: 'Журнал посещаемости обновлен' });
  } catch (error) {
    console.error('Ошибка при обновлении журнала посещаемости:', error);
    res.status(500).json({ error: 'Ошибка при обновлении журнала посещаемости' });
  }
};

exports.addAttendance = async (req, res) => {
  const { studentName, month, attendance, days } = req.body;
  const { group } = req.query;

  try {
    const newEntry = new Attendance({ studentName, group, month, attendance, days });
    await newEntry.save();
    res.json({ message: 'Запись добавлена' });
  } catch (error) {
    console.error('Ошибка при добавлении записи:', error);
    res.status(500).json({ error: 'Ошибка при добавлении записи' });
  }
};

exports.deleteAttendance = async (req, res) => {
  const { id } = req.params;

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: 'Неверный формат _id' });
    }

    await Attendance.findByIdAndDelete(id);
    res.json({ message: 'Запись удалена' });
  } catch (error) {
    console.error('Ошибка при удалении записи:', error);
    res.status(500).json({ error: 'Ошибка при удалении записи' });
  }
};

exports.copyAttendance = async (req, res) => {
  const { month } = req.body;

  try {
    const currentMonth = parseInt(month, 10);
    const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1;

    await Attendance.deleteMany({ month: nextMonth });

    const currentAttendance = await Attendance.find({ month: currentMonth });

    const nextAttendance = currentAttendance.map(entry => ({
      ...entry.toObject(),
      _id: new mongoose.Types.ObjectId(),
      month: nextMonth,
      attendance: {},
      days: []
    }));

    await Attendance.insertMany(nextAttendance);

    res.json({ message: 'Данные посещаемости скопированы на следующий месяц' });
  } catch (error) {
    console.error('Ошибка при копировании данных посещаемости:', error);
    res.status(500).json({ error: 'Ошибка при копировании данных посещаемости' });
  }
};
