const mongoose = require('mongoose');

let TaskSchema = new mongoose.Schema({
    title: {
         type: String,
         required: true   
    },
    description: {
        type: String,
        required: true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
},
 {
     collection: 'task'
 }
);
var task = mongoose.model('task', TaskSchema);
module.exports = task;