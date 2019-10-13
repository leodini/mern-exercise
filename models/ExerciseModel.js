const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    username: { type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date, required: true, default: Date.now()}

});

module.exports = mongoose.model('Exercise', exerciseSchema);