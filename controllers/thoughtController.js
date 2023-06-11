const { User, Thought } = require('../models');

module.exports = {
    async getThoughts(req, res) {
        try {
            const allThoughts = await Thought.find();
            res.json(allThoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getSingleThought(req, res) {
        try {
            const singleThought = await Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v');

            !singleThought
                ? res.status(404).json({ message: 'No thought found in database with this ID.' })
                : res.json(singleThought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            // , { $push: { thoughts: { _id: req.params.userId } } }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateThought(req, res) {
        try {
            const thought = Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true },
                { $push: { user: { thoughtId: req.params.thoughtId }  } }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought found in database with this ID.' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
            // ,{ $pull: { Reaction: { _id: req.params.reactionId } } }

            if(!thought) {
                return res.status(404).json({ message: 'No thought found in database with this ID.' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createReaction(req, res) {
        try {
            const reaction = await Reaction.create(req.body);
            // 2nd query, Thought.findOneAndUpdate
            // , { $push: { reactions: { _id: req.params.reactionId } } }
            res.json(reaction);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteReaction(req, res) {
        try {
            const reaction = await Reaction.findOneAndDelete({ _id: req.params.reactionId },{ $pull: { reactions: { _id: req.params.reactionId } } });

            if(!reaction) {
                return res.status(404).json({ message: 'No reaction found in database with this ID.' });
            }

            res.json(reaction);
        } catch (err) {
            res.status(500).json(err);
        }
    },

};