const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let blogSchema = new Schema({
    title: String,
    content: String
});

module.exports = blogSchema