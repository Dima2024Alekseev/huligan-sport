const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  id: Number,
  text: String,
  photoUrls: [String]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
