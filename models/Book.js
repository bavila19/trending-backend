const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    image: String,
    name: {type: String, require: true},
    author: String,
    description: String,
}, {timeStamps: true})

const Book = mongoose.model("Book", BookSchema)

module.exports = Book