const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const usersShema = new Schema({
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

const Users = mongoose.model('Users', usersShema)
module.exports = Users