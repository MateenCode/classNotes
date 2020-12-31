const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Tweet Schema
const tweetSchema = new Schema({
    title: String,
    body: String,
    author: String,
    likes: { type: Number, default: 0 },
    deleted: { type: Boolean, default: false }
}, { timestamps: true });

// Create Tweet Model
const Tweet = mongoose.model("Tweet", tweetSchema);

// export tweet model
module.exports = Tweet;
