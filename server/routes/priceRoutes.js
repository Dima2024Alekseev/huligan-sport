const express = require('express');
const router = express.Router();
const priceController = require('../controllers/priceController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');


router.get('/', priceController.getPrices);
router.put('/', authMiddleware, adminMiddleware, priceController.updatePrice);
router.post('/', authMiddleware, adminMiddleware, priceController.addPrices);
router.delete('/:id', authMiddleware, adminMiddleware, priceController.deletePrice);

module.exports = router;
