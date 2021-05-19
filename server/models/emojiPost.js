import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  name: String,
  emoji: String,
  createdAt: {
    type: Date,
    default: Date(),
  },
});

const emojiPost = mongoose.model('emojiPost', postSchema);

export default emojiPost;
