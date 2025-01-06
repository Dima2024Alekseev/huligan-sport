const Schedule = require('../models/Schedule');

exports.getSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.find({});
    res.json(schedule);
  } catch (error) {
    console.error('Ошибка при получении расписания:', error);
    res.status(500).json({ error: 'Ошибка при получении расписания' });
  }
};

exports.updateSchedule = async (req, res) => {
  const { schedule } = req.body;

  try {
    await Schedule.deleteMany({});
    await Schedule.insertMany(schedule);
    res.json({ message: 'Расписание обновлено' });
  } catch (error) {
    console.error('Ошибка при обновлении расписания:', error);
    res.status(500).json({ error: 'Ошибка при обновлении расписания' });
  }
};
