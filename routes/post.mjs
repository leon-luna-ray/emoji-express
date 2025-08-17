import express from 'express';
import Post from '../models/Post.mjs';

const router = express.Router();

// GET
router.get('/', async (req, res) => {
  try {
    const userId = req.query.userId;

    const posts = await Post.find({ userId });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch posts' });
  }
});

// router.get('/:id', async (req, res) => {
//   try {
//     const post = await Post.findById(req.params.id);
//     if (!post) return res.status(404).json({ error: 'Post not found' });
//     res.json(post);
//   } catch (error) {
//     res.status(500).json({ error: 'Could not fetch the post' });
//   }
// });

// POST
router.post('/', async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Could not create the post' });
  }
});

// PATCH
// router.patch('/:id', async (req, res) => {
//   try {
//     const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     if (!post) return res.status(404).json({ error: 'Post not found' });
//     res.json(post);
//   } catch (error) {
//     res.status(500).json({ error: 'Could not update the post' });
//   }
// });

// DELETE
router.delete('/:id', async (req, res) => {
  try {
    console.log('Attempting to delete post with ID:', req.params.id);
    
    // Check if the post exists first
    const existingPost = await Post.findById(req.params.id);
    console.log('Post found:', existingPost);
    
    if (!existingPost) {
      console.log('Post not found in database');
      return res.status(404).json({ error: 'Post not found' });
    }
    
    const post = await Post.findByIdAndDelete(req.params.id);
    console.log('Post deleted successfully:', post._id);
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Could not delete the post' });
  }
});

export default router;
