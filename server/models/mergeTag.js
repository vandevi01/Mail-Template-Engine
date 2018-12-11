const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MergeTagSchema = new Schema({
    name: String,
    value: String,
});
module.exports = mongoose.model('mergetag', MergeTagSchema);
