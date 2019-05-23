const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var clientModel = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    } 
});

module.exports = mongoose.model('client', clientModel);