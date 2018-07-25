const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    first_name : {
        type : String,
        required : true,
        trim : true,
        minlength : 3
    },

    last_name : {
        type : String,
        required : true,
        trim : true,
        minlength : 3
    },

    is_active : {
        type : Number,
        default : 0
    }


});

module.exports = mongoose.model('users',User);