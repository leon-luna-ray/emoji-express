import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import './loadEnvironment.mjs';
import posts from './routes/post.mjs';
import authRoutes from './routes/auth.mjs';
import protectedRoutes from './routes/protected.mjs';

const app = express();

const PORT = process.env.PORT || 8080;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MY_MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);
app.use('/api/v1/posts', posts);

const startApp = () => {
  app.listen(PORT, () => {
    console.log(`📡 Server is running on port: ${PORT}`);
  });
};

connectDB().then(() => {
  startApp();
});
