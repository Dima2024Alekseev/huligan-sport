const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
  category: String,
  price: Number,
  duration: String,
  description: String
});

const Price = mongoose.model('Price', priceSchema);

module.exports = Price;
