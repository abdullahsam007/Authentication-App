//to find types of what user enter

//important

const mongoose = require('mongoose')
const {Schema} = mongoose
const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String
})


const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel;