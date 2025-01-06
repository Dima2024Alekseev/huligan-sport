const Product = require('../models/Product');
const path = require('path');
const fs = require('fs');

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
exports.updateProduct = async (req, res) => {
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
exports.createProduct = async (req, res) => {
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
