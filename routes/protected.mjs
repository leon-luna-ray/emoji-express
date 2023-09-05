import express from 'express';
import authMiddleware from '../middleware/authMiddleware.mjs';

const router = express.Router();

// Protected route
router.get('/protected', authMiddleware, (req, res) => {
  // ... (same code as in the previous example)
});

export default router;
