const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rewardHistorySchema = new Schema({
    datetime: { type: Date, default: Date.now },
    points: { type: Number, required: true },
    givenBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    givenTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('RewardHistory', rewardHistorySchema);