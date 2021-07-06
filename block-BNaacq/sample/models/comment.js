let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let commentSchema = new Schema({
    content: {type: String, required: true},
    author: Schema.Types.ObjectId,
    article: Schema.Types.ObjectId,
}, {timestamps: true});

module.exports = mongoose.model('Comment', commentSchema);