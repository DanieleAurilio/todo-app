const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    
    firstname: {
        type: String,
        required: true
    },
    
    lastname: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    }
});     

var user = mongoose.model('user',userSchema);

module.exports = user;