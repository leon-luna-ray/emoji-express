import express from 'express';
import cors from 'cors';
import { pool } from './db.js';

const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
  console.log(`
  📡 The server is running on port ${PORT}
  `);
});

// Use req.body to get data from the client side

// Routes
app.post('/emoji', async (req, res) => {
  try {
    console.log('📍 Post request received');
  } catch (err) {
    console.error(err.message);
  }
});

// Middleware
app.use(express.json());
app.use(cors());
