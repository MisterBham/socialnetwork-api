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
            const singleUser = await User.findOne(
                { _id: req.params.userId }
            )
            .populate({ path: 'thoughts', select: '-__v' })
            .populate({ path: 'friends', select: '-__v' })

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
            const user = await User.findOneAndUpdate(
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
            const user = await User.findOneAndDelete(
                { _id: req.params.userId },
                { $pull: { thoughts: { username: user.username } } }
                );

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
            const friend1 = await User.findOneAndUpdate(
                { _id: req.params.userId }, 
                { $push: { friends: req.params.friendId } },
                { new: true }
                );

            const friend2 = await User.findOneAndUpdate(
                { _id: req.params.friendId }, 
                { $push: { friends: req.params.userId } },
                { new: true }
            );

            if (!friend1 || !friend2) {
                res.status(404).json({ message: 'Error: Please verify both userId and friendId.' })
            }

            res.json(friend1);
        } catch (err) {
            res.status(500).json(err);
            console.log(err);
        }
    },

    async deleteFriend(req, res) {
        try {
            const friend1 = await User.findOneAndUpdate(
                { _id: req.params.userId }, 
                { $pull: { friends: req.params.friendId } },
                { new: true }
                );

            const friend2 = await User.findOneAndUpdate(
                { _id: req.params.friendId }, 
                { $pull: { friends: req.params.userId } },
                { new: true }
                );

            if(!friend1 || !friend2) {
                return res.status(404).json({ message: 'Error: Please verify both userId and friendId.' });
            }

            res.json(friend1);
        } catch (err) {
            res.status(500).json(err);
        }
    }, 
    
};