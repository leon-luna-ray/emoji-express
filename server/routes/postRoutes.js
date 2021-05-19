import express from 'express';
import { getPosts, createPost } from '../controllers/emojiController.js';

const router = express.Router();

// http://localhost:3001/posts
router.get('/', getPosts);
router.post('/', createPost);

export default router;
