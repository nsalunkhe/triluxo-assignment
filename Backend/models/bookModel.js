const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
});

// virtual 'id' field that returns a string representation of '_id'
bookSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised when converting to JSON
bookSchema.set('toJSON', {
  virtuals: true,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
