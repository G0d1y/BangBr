const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    addId: {
        type:  String,
        required: true
    },
    icName: {
        type:  String,
        required: true
    },
    ChannelId: {
        type: Number,
        require: true,
    },
    pistol: {
        type:  Number,
        required: true
    },
    pistol50: {
        type:  Number,
        required: true
    },
    bullpuprifle: {
        type:  Number,
        required: true
    },
    gusenberg: {
        type:  Number,
        required: true
    },
    assultsmg: {
        type:  Number,
        required: true
    },
    pumpshotgun_mk2: {
        type:  Number,
        required: true
    },
    advancedrifle: {
        type:  Number,
        required: true
    },
    combatpistol: {
        type:  Number,
        required: true
    },
    combatpdw: {
        type:  Number,
        required: true
    },
    smg: {
        type:  Number,
        required: true
    },
    carbinerifle: {
        type:  Number,
        required: true
    },
    tax: {
        type:  Boolean,
        required: false
    },

})

module.exports = mongoose.model('logDB' , schema)