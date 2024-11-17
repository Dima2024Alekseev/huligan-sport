const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

router.get('/', groupController.getGroups);
router.post('/', authMiddleware, adminMiddleware, groupController.addGroup);
router.put('/:id', authMiddleware, adminMiddleware, groupController.updateGroup);
router.delete('/:id', authMiddleware, adminMiddleware, groupController.deleteGroup);

module.exports = router;
