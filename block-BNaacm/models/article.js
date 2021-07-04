let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let articleSchema = new Schema({
    title: String,
    description: String
}, {timestamps: true});

module.exports = mongoose.model('Artist', articleSchema);