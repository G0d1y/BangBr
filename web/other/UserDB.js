const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    DiscordName: {
        type:  String,
        required: true
    },
    DiscordId: {
        type:  String,
        required: true
    },
    Subscribe: {
        type:  Date,
        required: true
    },
    Free: {
        type:  String,
        required: true
    },
    ServerId: {
        type:  String,
        required: true
    },
    LOCKER: {
        type:  String,
        required: false
    },
    ENGINE: {
        type:  String,
        required: false
    },
    GRIP: {
        type:  String,
        required: false
    },
    SILENCER: {
        type:  String,
        required: false
    },
    CLIP: {
        type:  String,
        required: false
    },
})

module.exports = mongoose.model('UserDB' , schema)