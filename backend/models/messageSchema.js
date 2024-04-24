const mongoose = require('mongoose')

// Schema for messages
const messageSchema = new mongoose.Schema({
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
    message: {
        type: String,
        required: true
    },
    offer: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

// Create a model for the schema and export it
const Message = mongoose.model('Message', messageSchema)

module.exports = Message