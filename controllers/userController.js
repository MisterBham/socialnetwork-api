const { User, Thought } = require('../models');

module.exports = {
    async getUsers(req, res) {
        try {
            const allUsers = await User.find();
            res.json(allUsers);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async getSingleUser(req, res) {
        try {
            const singleUser = await User.findOne({ _id: req.params.userId })
            .select('-__v');

            !singleUser
                ? res.status(404).json({ message: 'No user found in database with this ID.' })
                : res.json(singleUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async updateUser(req, res) {
        try {
            const user = User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true },
            );

            if (!user) {
                return res.status(404).json({ message: 'No user found in database with this ID.' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    },

    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId },{ $pull: { Thought: { _id: req.params.userId } } });

            if(!user) {
                return res.status(404).json({ message: 'No user found in database with this ID.' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async addFriend(req, res) {
        try {
            const friend = await User.findOneAndUpdate(
                { _id: req.params.userId }, 
                { $push: { friends: req.params.friendId } },
                { new: true }
                );

            if (!friend) {
                res.status(404).json({ message: 'Error: Please verify both userId and friendId.' })
            }
            // const thought = await Thought.findOneAndUpdate({ _id: req.params.thoughtId })
            // 2nd query, Thought.findOneAndUpdate
            // , { $push: { reactions: { _id: req.params.reactionId } } }
            res.json(friend);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    async deleteFriend(req, res) {
        try {
            const friend = await User.findOneAndUpdate(
                { _id: req.params.userId }, 
                { $pull: { friends: req.params.friendId } },
                { new: true }
                );

            if(!friend) {
                return res.status(404).json({ message: 'Error: Please verify both userId and friendId.' });
            }

            res.json(friend);
        } catch (err) {
            res.status(500).json(err);
        }
    }, 
    
};