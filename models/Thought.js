const { Schema, Types, model } = require('mongoose');

// Reaction Schema
const reactionSchema = new Schema(
    {
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => date.toLocaleDateString("en-US")
        }
    },
    {
        toJSON: {
            getters: true
        },
    }
);

// Thought Schema
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => date.toLocaleDateString("en-US")
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return `${this.reactions.length}`;
    });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;