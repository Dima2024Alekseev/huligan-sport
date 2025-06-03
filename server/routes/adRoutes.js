const express = require('express');
const router = express.Router();
const adController = require('../controllers/adController');

// Маршрут для получения состояния рекламы, URL изображения и ссылки
router.get('/ad-status', adController.getAdStatus);

// Маршрут для обновления состояния рекламы
router.post('/toggle-ad', adController.toggleAd);

// Маршрут для загрузки и обновления изображения рекламы
router.post('/upload-ad-image', adController.upload.single('image'), adController.uploadAdImage);

// Маршрут для обновления ссылки рекламы
router.post('/update-ad-redirect-url', adController.updateAdRedirectUrl);

module.exports = router;
