import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  name: String,
  secondary: String,
  type: String,
  level: String,
  emoji: String,
});

export default mongoose.model('Post', postSchema);
