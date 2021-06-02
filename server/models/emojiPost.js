import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  name: String,
  secondary: String,
  type: String,
  level: Number,
  emoji: String,
  createdAt: {
    type: Date,
    default: Date(),
  },
});

const emojiPost = mongoose.model('emojiPost', postSchema);

export default emojiPost;
