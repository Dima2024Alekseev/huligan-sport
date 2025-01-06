const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

router.get('/', scheduleController.getSchedule);
router.put('/', authMiddleware, adminMiddleware, scheduleController.updateSchedule);

module.exports = router;
