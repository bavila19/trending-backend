const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    name: {type: String, require: true},
    image: String,
    description: String,
}, {timeStamps: true})

const Book = mongoose.model("Book", BookSchema)

module.exports = Book