const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  phone: String,
  age: String,
  direction: String,
  timestamp: { type: Date, default: Date.now }
});

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
