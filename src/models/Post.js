const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  id: Number,
  from_id: Number,
  owner_id: Number,
  date: Number,
  text: String,
  photoUrls: [String],
  likes: {
    count: Number,
    user_likes: Number,
    can_like: Number,
    can_publish: Number
  },
  reposts: {
    count: Number,
    user_reposted: Number
  },
  comments: {
    count: Number,
    can_post: Number,
    groups_can_post: Boolean
  },
  views: {
    count: Number
  },
  attachments: [Object]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
