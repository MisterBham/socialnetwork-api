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

            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true },
                { $push: { user: { thoughtId: req.params.thoughtId }  } }
            )

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
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
            const reaction = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body} },
            { new: true, runValidators: true })
            .select('-__v')
            .populate({path: 'reactions', select: '-__v'})

        if (!reaction) {
            return res.status(404).json({ message: 'No thought found in database with this ID.' });
        }

        res.json(reaction);
        } catch (err) {
        res.status(500).json(err);
        }
    },

    async deleteReaction(req, res) {
        try {
            const reaction = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { _id: req.params.reactionId } } },
                { new: true, runValidators: true }
                );

            if(!reaction) {
                return res.status(404).json({ message: 'No reaction found in database with this ID.' });
            }

            res.json(reaction);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};