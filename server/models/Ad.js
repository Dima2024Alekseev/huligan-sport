// models/Ad.js
const mongoose = require('mongoose');

const AdSchema = new mongoose.Schema({
    isActive: {
        type: Boolean,
        default: true,
    },
    imageUrl: {
        type: String,
        default: '',
    },
    redirectUrl: { // Новое поле для хранения ссылки
        type: String,
        default: '',
    },
});

module.exports = mongoose.model('Ad', AdSchema);
