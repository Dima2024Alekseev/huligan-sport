const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Настройка хранилища для Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, '../../client/src/img');
        fs.mkdirSync(uploadPath, { recursive: true }); // Создание директории, если она не существует
        cb(null, uploadPath); // Папка, куда будут сохраняться изображения
    },
    filename: (req, file, cb) => {
        const filename = path.parse(file.originalname).name;
        const ext = path.extname(file.originalname);
        const fullPath = path.join(__dirname, '../../client/src/img', `${filename}${ext}`);

        // Проверка существования файла в папке img
        fs.access(fullPath, fs.constants.F_OK, (err) => {
            if (err) {
                // Файл не существует в папке img, создаем новый
                cb(null, `${Date.now()}${ext}`);
            } else {
                // Файл существует в папке img, используем его имя
                cb(null, `${filename}${ext}`);
            }
        });
    }
});

// Настройка Multer с ограничениями и фильтрацией файлов
const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }, // Ограничение размера файла (1MB)
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

        if (mimetype && extname) {
            return cb(null, true);
        }
        cb(new Error('Неподдерживаемый тип файла!'));
    }
}).single('image');

// Маршрут для получения всех продуктов
router.get('/', productController.getAllProducts);

// Маршрут для обновления продукта
router.put('/:id', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.error('Ошибка при загрузке файла:', err);
            return res.status(500).json({ message: err.message });
        }
        productController.updateProduct(req, res);
    });
});

// Маршрут для удаления продукта
router.delete('/:id', productController.deleteProduct);

// Маршрут для создания нового продукта
router.post('/', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.error('Ошибка при загрузке файла:', err);
            return res.status(500).json({ message: err.message });
        }
        productController.createProduct(req, res);
    });
});

module.exports = router;
