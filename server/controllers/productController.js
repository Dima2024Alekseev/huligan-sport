const Product = require('../models/Product');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

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

// Настройка Multer с фильтрацией файлов
const upload = multer({
    storage: storage,
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

// Получение всех продуктов
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        console.error('Ошибка при получении продуктов:', err);
        res.status(500).json({ message: err.message });
    }
};

// Обновление продукта
exports.updateProduct = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.error('Ошибка при загрузке файла:', err);
            return res.status(500).json({ message: err.message });
        }
        updateProductLogic(req, res);
    });
};

const updateProductLogic = async (req, res) => {
    const { id } = req.params;
    const { text, price } = req.body;
    const image = req.file ? `/img/${req.file.filename}` : null;

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Продукт не найден' });
        }

        const updateFields = { text, price };
        if (image) {
            updateFields.image = image;
        }

        const updatedProduct = await Product.findByIdAndUpdate(id, updateFields, { new: true });
        res.json(updatedProduct);
    } catch (err) {
        console.error('Ошибка при обновлении продукта:', err);
        res.status(500).json({ message: err.message });
    }
};

// Удаление продукта
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Продукт не найден' });
        }

        await Product.findByIdAndDelete(id);
        res.json({ message: 'Продукт успешно удален' });
    } catch (err) {
        console.error('Ошибка при удалении продукта:', err);
        res.status(500).json({ message: err.message });
    }
};

// Создание нового продукта
exports.createProduct = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.error('Ошибка при загрузке файла:', err);
            return res.status(500).json({ message: err.message });
        }
        createProductLogic(req, res);
    });
};

const createProductLogic = async (req, res) => {
    const { text, price } = req.body;
    const image = req.file ? `/img/${req.file.filename}` : null;

    try {
        const newProduct = new Product({ text, price, image });
        await newProduct.save();
        res.json(newProduct);
    } catch (err) {
        console.error('Ошибка при создании продукта:', err);
        res.status(500).json({ message: err.message });
    }
};
