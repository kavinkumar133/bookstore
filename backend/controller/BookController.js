//filename: BookController.js
const BookModel = require('../model/BookModel');

const getAllBooks = async (req, res) => {
    try {
        const books = await BookModel.find();
        res.status(200).json({ books });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

const getBookById = async (req, res) => {
    try {
        const book = await BookModel.findById(req.params.id);
        res.status(200).json({ book });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

const addBook = async (req, res) => {
    try {
        const book = await BookModel.create(req.body);
        res.status(201).json({ book });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

const updateBook = async (req, res) => {
    try {
        const book = await Book
        Model.findByIdAndUpdate(req
        .params
        .id, req.body, { new: true });
        res.status(200).json({ book });
    }

    catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

const deleteBook = async (req, res) => {
    try {
        await BookModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Book deleted successfully' });
    }catch (error)
    {
        res.status(500).json({ message: error.message });
        }
        }

module.exports = { getAllBooks, getBookById, addBook, updateBook, deleteBook };


