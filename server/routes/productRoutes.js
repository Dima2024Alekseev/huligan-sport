const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');

router.get('/', productController.getAllProducts);

router.put('/:id', authMiddleware, adminMiddleware, productController.updateProduct);

router.delete('/:id', authMiddleware, adminMiddleware, productController.deleteProduct);

router.post('/', authMiddleware, adminMiddleware, productController.createProduct);

module.exports = router;
