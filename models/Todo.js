const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema(
    {
        title: {type: String, required: true},
        content: {type: String, required: true},
        author: {type: Schema.Types.ObjectId, ref: 'User'},
        complete: {type: Boolean, default: false},
        completedOn: {type: Date, default: Date.now}
    }
);

module.exports = mongoose.model('Todo', TodoSchema);