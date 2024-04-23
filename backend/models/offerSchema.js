const mongoose = require('mongoose')

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

const Offer = mongoose.model('Offer', offerSchema)

module.exports = Offer