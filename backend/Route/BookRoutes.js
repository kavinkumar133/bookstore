//file: backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();

const BookController= require('../controller/BookController');

router.get('/get', BookController.getAllBooks);
router.get('/get:id',BookController.getBookById);
router.post('/new',BookController.addBook);
router.put('/update:id',BookController.updateBook);
router.delete('/delete:id',BookController.deleteBook);

module.exports = router;

