const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

router.get('/', attendanceController.getAttendance);
router.put('/', authMiddleware, adminMiddleware, attendanceController.updateAttendance);
router.post('/', authMiddleware, adminMiddleware, attendanceController.addAttendance);
router.delete('/:id', authMiddleware, adminMiddleware, attendanceController.deleteAttendance);
router.post('/copy', authMiddleware, adminMiddleware, attendanceController.copyAttendance);

module.exports = router;
