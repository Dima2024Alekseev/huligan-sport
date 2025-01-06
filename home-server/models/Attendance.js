const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  studentName: String,
  group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
  month: Number,
  attendance: {
    type: Map,
    of: Boolean
  },
  days: [Number]
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
