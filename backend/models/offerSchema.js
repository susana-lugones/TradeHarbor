const mongoose = require('mongoose')

// Offer Schema for the Database
const offerSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            default: []
        }
    ],
    messageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'messageId',
        required: true
    }
}, {timestamps: true})

// Create a model for the schema and export it
const Offer = mongoose.model('Offer', offerSchema)

module.exports = Offer