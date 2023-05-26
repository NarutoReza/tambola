const mongoose = require('mongoose')

const Model = new mongoose.Schema({
    name: {
        type: String
    },

    tickets: [{
        type: [],
        default: Array
    }]
})

module.exports = mongoose.model('Model', Model)