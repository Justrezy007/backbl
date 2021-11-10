const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const formData = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    WANumber : {
        type: String,
        required: true
    }
},{timestamps:true})

const FormData = mongoose.model('Users', formData)
module.exports = FormData