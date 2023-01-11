const mongoose = require('mongoose')

const FashionSchema = new mongoose.Schema({
    name: {type: String, require: true},
    image: String,
    description: String,
}, {timeStamps: true})

const Fashion = mongoose.model("Fashion", FashionSchema)

module.exports = Fashion