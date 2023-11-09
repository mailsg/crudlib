const { ObjectId } = require('mongodb');
const { getBooksCollection } = require('../config/database');

async function getAllBooks() {
    const collection = getBooksCollection();
    return collection.find({}).toArray();
}

async function getBookById(bookId) {
    try {
        const collection = getBooksCollection();
        const book = await collection.findOne({ _id: new ObjectId(bookId) });
        return book;
    } catch (error) {
        console.error('Error fetching book by ID:', error);
        throw error;
    }
}

async function addBook(book) {
    const collection = getBooksCollection();
    return collection.insertOne(book);
}

async function updateBook(bookId, updatedBook) {
    const collection = getBooksCollection();
    return collection.updateOne({ _id: new ObjectId(bookId) }, { $set: updatedBook });
}

async function deleteBook(bookId) {
    const collection = getBooksCollection();
    return collection.deleteOne({ _id: new ObjectId(bookId) });
}

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
};
