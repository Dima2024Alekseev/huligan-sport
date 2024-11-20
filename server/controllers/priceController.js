const Price = require('../models/Price');

exports.getPrices = async (req, res) => {
  try {
    const prices = await Price.find({});
    res.json(prices);
  } catch (error) {
    console.error('Ошибка при получении цен:', error);
    res.status(500).json({ error: 'Ошибка при получении цен' });
  }
};

exports.updatePrice = async (req, res) => {
  const { price } = req.body;

  try {
    const updatedPrice = await Price.findOneAndUpdate({ _id: price._id }, price, { new: true });
    res.json({ message: 'Цена обновлена', price: updatedPrice });
  } catch (error) {
    console.error('Ошибка при обновлении цены:', error);
    res.status(500).json({ error: 'Ошибка при обновлении цены' });
  }
};

exports.addPrices = async (req, res) => {
  const { prices } = req.body;

  try {
    await Price.insertMany(prices);
    res.json({ message: 'Цены добавлены' });
  } catch (error) {
    console.error('Ошибка при добавлении цен:', error);
    res.status(500).json({ error: 'Ошибка при добавлении цен' });
  }
};

exports.deletePrice = async (req, res) => {
  const { id } = req.params;

  try {
    await Price.findByIdAndDelete(id);
    res.json({ message: 'Цена удалена' });
  } catch (error) {
    console.error('Ошибка при удалении цены:', error);
    res.status(500).json({ error: 'Ошибка при удалении цены' });
  }
};
