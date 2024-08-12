const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    cover: { type: String, required: true },
    stock: { type: Number, required: true },
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },

}); 

module.exports = mongoose.model('Book', BookSchema);


