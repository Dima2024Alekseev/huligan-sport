const Group = require('../models/Group');
const Attendance = require('../models/Attendance');

exports.getGroups = async (req, res) => {
  try {
    const groups = await Group.find({});
    res.json(groups);
  } catch (error) {
    console.error('Ошибка при получении групп:', error);
    res.status(500).json({ error: 'Ошибка при получении групп' });
  }
};

exports.addGroup = async (req, res) => {
  const { name } = req.body;

  try {
    const newGroup = new Group({ name });
    await newGroup.save();
    res.json({ message: 'Группа добавлена' });
  } catch (error) {
    console.error('Ошибка при добавлении группы:', error);
    res.status(500).json({ error: 'Ошибка при добавлении группы' });
  }
};

exports.updateGroup = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const group = await Group.findById(id);
    if (!group) {
      return res.status(404).json({ error: 'Группа не найдена' });
    }

    group.name = name;
    await group.save();

    await Attendance.updateMany({ group: group._id }, { group: group._id });

    res.json({ message: 'Группа обновлена' });
  } catch (error) {
    console.error('Ошибка при обновлении группы:', error);
    res.status(500).json({ error: 'Ошибка при обновлении группы' });
  }
};

exports.deleteGroup = async (req, res) => {
  const { id } = req.params;

  try {
    const group = await Group.findByIdAndDelete(id);
    if (!group) {
      return res.status(404).json({ error: 'Группа не найдена' });
    }
    res.json({ message: 'Группа удалена' });
  } catch (error) {
    console.error('Ошибка при удалении группы:', error);
    res.status(500).json({ error: 'Ошибка при удалении группы' });
  }
};
