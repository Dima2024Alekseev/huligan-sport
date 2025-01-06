const express = require('express');
const router = express.Router();
const priceController = require('../controllers/priceController');

router.get('/', priceController.getPrices);
router.put('/', priceController.updatePrice);
router.post('/', priceController.addPrices);
router.delete('/:id', priceController.deletePrice);

module.exports = router;
