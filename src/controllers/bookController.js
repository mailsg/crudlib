const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// List all the books in the database - (GET REQUEST)- /api/books 
router.get('/', async (req, res) => {
    try {
        const books = await Book.getAllBooks();
        res.json(books);
    } catch (error) {
        console.error('Error fetching books:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// List the book w.r.t to id in the database - (GET REQUEST)-  /api/books/:id
router.get('/:id', async (req, res) => {
    const bookId = req.params.id;
    try {
        const book = await Book.getBookById(bookId);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        console.error('Error fetching book by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Add a book in the database - (POST REQUEST) /api/books
router.post('/', async (req, res) => {
    const newBook = req.body;
    try {
        const result = await Book.addBook(newBook);
        if (result) {
            res.json({ message: 'Book added successfully' });
        } else {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } catch (error) {
        console.error('Error adding new book:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Update a book in the database w.r.t id - (PUT REQUEST) /api/books/:id
router.put('/:id', async (req, res) => {
    const bookId = req.params.id;
    const updatedBook = req.body;
    try {
        const result = await Book.updateBook(bookId, updatedBook);
        if (result.modifiedCount > 0) {
            res.json({ message: 'Book updated successfully' });
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Delete a book in the database w.r.t id - (DELETE REQUEST) /api/books/:id
router.delete('/:id', async (req, res) => {
    const bookId = req.params.id;
    try {
        const result = await Book.deleteBook(bookId);
        if (result.deletedCount > 0) {
            res.json({ message: 'Book deleted successfully' });
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
