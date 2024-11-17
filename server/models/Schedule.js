const mongoose = require('mongoose');

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

module.exports = Schedule;
