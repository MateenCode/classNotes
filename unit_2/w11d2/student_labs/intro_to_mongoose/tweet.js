const mongoose = require('mongoose'); //require mongoose
const Schema = mongoose.Schema; // create a shorthand for the mongoose Schema constructor

// create Tweet Schema///
const tweetSchema = new Schema ({
   title: String,
   body:String,
   author: String,
   likes: {type:Number, default: 0},
   deleted: {type: Boolean, default: false}
}, {timestamps: true})

// create tweet model///
const Tweet = mongoose.model('Tweet', tweetSchema);

// export tweet model///
module.exports = Tweet;