const express = require('express');
const router = express.Router();
const RewardHistory = require('../models/rewardHistory.model');
const User = require('../models/user.model');

// Get reward history for a user
router.get('/:userId', async (req, res) => {
    try {
        const rewards = await RewardHistory.find({ givenTo: req.params.userId }).populate('givenBy', 'name');
        res.status(200).send(rewards);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Create a new reward
router.post('/:userId', async (req, res) => {
    try {
        const { points, givenById } = req.body;

        if (points > 100 || points <= 0) {
            return res.status(400).send("Invalid points value");
        }

        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).send("User not found");
        }

        const giver = await User.findById(givenById);
        if (!giver) {
            return res.status(404).send("Giver not found");
        }

        if (giver.p5Balance < points) {
            return res.status(400).send("Not enough P5 balance");
        }

        // Deduct P5 from giver
        giver.p5Balance -= points;
        await giver.save();

        // Add rewards to user
        user.rewardBalance += points;
        await user.save();

        // Save reward history
        const rewardHistory = new RewardHistory({
            points,
            givenBy: givenById,
            givenTo: req.params.userId,
        });

        await rewardHistory.save();
        res.status(201).send(rewardHistory);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Delete a reward (reverse the P5 given)
router.delete('/:rewardId', async (req, res) => {
    try {
        const reward = await RewardHistory.findById(req.params.rewardId);
        if (!reward) {
            return res.status(404).send();
        }

        const user = await User.findById(reward.givenTo);
        const giver = await User.findById(reward.givenBy);

        user.rewardBalance -= reward.points;
        giver.p5Balance += reward.points;

        await user.save();
        await giver.save();
        await reward.remove();

        res.status(200).send(reward);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;