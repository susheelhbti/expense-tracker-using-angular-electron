const mongoose = require('mongoose')

const Schema = mongoose.Schema

const category = new Schema({
    type: {
        type : String
    },
    category: {
        type : String
    },
    userId : {
        type: String
    }

})

module.exports = mongoose.model('category',category)