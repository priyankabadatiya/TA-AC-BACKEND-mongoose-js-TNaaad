let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {type: String, required: true},
    email: { type: String, lowercase: true },
    age: {type: Number, required: true}
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema);