const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
    user_name: {
        type: String,
        required: true,
    },
    user_email: {
        type: String,
        required: true,
    },
    user_message: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Message',MessageSchema)
