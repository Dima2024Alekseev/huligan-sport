const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    history: [
        {
            text: String,
            price: Number,
            image: String,
            timestamp: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
