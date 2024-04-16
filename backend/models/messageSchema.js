const mongoose = require('mongoose')

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
    }
    // Created At, Updated At Fields in Fronted message.CreatedAT, message.UpdatedAt
}, {timestamps: true})

const Message = mongoose.model('Message', messageSchema)

module.exports = Message