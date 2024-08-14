const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    title: {
        type: String, // Changed from ObjectId to String
        required: true
    },
    description: { // Corrected spelling from "describtion" to "description"
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Cart', cartSchema);
