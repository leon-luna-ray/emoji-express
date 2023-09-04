import express from "express";
import mongoose from 'mongoose';
import cors from "cors";
import "./loadEnvironment.mjs";
import posts from "./routes/post.mjs";
import authRoutes from './routes/auth.mjs';
import protectedRoutes from './routes/protected.mjs';

const PORT = process.env.PORT || 5050;
const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/protected', protectedRoutes);
app.use("/api/v1/posts", posts);

app.listen(PORT, () => {
  console.log(`📡 Server is running on port: ${PORT}`);
});