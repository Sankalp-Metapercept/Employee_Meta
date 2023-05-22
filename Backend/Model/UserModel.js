const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    
    email : {
        type : String,
        required : [true, "Please Write your E-mail"],
        unique : true,
    },

    password : {
        type: String,
        required : [true,"Please Write your password"]
    }
})

const User = mongoose.model('user', UserSchema)
module.exports = User;