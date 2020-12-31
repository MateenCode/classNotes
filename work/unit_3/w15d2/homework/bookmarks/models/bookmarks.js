const mongoose = require('mongoose');

const bookmarkSchema = new mongoose.Schema({
    title: String,
    url: String
});

const Bookmarks = mongoose.model('Bookmarks', bookmarkSchema);

module.exports = Bookmarks;