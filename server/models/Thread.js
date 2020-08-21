const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;
const ThreadSchema = new Schema({
    pName: {
        type: String
    },
    pValue: {
        type: String
    },
    cName: {
        type: String
    },
    cEmailId: {
        type: String
    }
});

const Thread = mongoose.model('threads', ThreadSchema);

module.exports = Thread;
