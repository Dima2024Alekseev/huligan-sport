// controllers/adController.js
const Ad = require('../models/Ad'); // Модель для рекламы
const path = require('path');
const multer = require('multer');

// Настройка multer для загрузки изображений
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../client/src/img'));
    },
    filename: (req, file, cb) => {
        cb(null, `ad-${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({ storage });

// Получение состояния рекламы, URL изображения и ссылки
const getAdStatus = async (req, res) => {
    try {
        const ad = await Ad.findOne();
        if (ad) {
            res.json({ isActive: ad.isActive, imageUrl: ad.imageUrl, redirectUrl: ad.redirectUrl });
        } else {
            res.json({ isActive: false, imageUrl: '', redirectUrl: '' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Обновление состояния рекламы
const toggleAd = async (req, res) => {
    try {
        const ad = await Ad.findOne();
        if (ad) {
            ad.isActive = !ad.isActive;
            await ad.save();
        } else {
            const newAd = new Ad({ isActive: true });
            await newAd.save();
        }
        res.json({ message: 'Ad status updated' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Загрузка и обновление изображения рекламы
const uploadAdImage = async (req, res) => {
    try {
        const imageUrl = `/img/${req.file.filename}`;
        const ad = await Ad.findOne();
        if (ad) {
            ad.imageUrl = imageUrl;
            await ad.save();
        } else {
            const newAd = new Ad({ isActive: true, imageUrl });
            await newAd.save();
        }
        res.json({ message: 'Ad image uploaded', imageUrl });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Обновление ссылки рекламы
const updateAdRedirectUrl = async (req, res) => {
    try {
        const { redirectUrl } = req.body;
        const ad = await Ad.findOne();
        if (ad) {
            ad.redirectUrl = redirectUrl;
            await ad.save();
        } else {
            const newAd = new Ad({ isActive: true, redirectUrl });
            await newAd.save();
        }
        res.json({ message: 'Ad redirect URL updated', redirectUrl });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = {
    getAdStatus,
    toggleAd,
    uploadAdImage,
    updateAdRedirectUrl,
    upload,
};
