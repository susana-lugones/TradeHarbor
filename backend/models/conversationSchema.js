const mongoose = require('mongoose')

// Conversation Schema for the Database
const conversationSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message',
            default: [],
        }
    ]
}, {timestamps: true})

// Create a model for the schema and export it
const Conversation = mongoose.model('Conversation', conversationSchema)

module.exports = Conversation