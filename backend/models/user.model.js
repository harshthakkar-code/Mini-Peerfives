const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    p5Balance: { type: Number, default: 100 },
    rewardBalance: { type: Number, default: 0 },
});

module.exports = mongoose.model('User', userSchema);