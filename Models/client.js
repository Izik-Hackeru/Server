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
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    visitCount: {
        type: Number,
        default: 0
    },
    lastLogin: {
        type: Date
    }
});

module.exports = mongoose.model('client', clientModel);