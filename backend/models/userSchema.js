const mongoose = require('mongoose')

// Schema for users
const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    ratings: [{rating: Number}],
    totalRating: {type: Number, default: 0},
}, {timestamps: true})

// Create a model for the schema and export it
const User = mongoose.model('User', userSchema)

module.exports = User