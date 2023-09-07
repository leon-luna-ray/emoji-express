import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import './loadEnvironment.mjs';
import posts from './routes/post.mjs';
import authRoutes from './routes/auth.mjs';
import protectedRoutes from './routes/protected.mjs';

const app = express();

const PORT = process.env.PORT || 8080;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
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

// if(process.env.ENV === 'prod'){

// }
app.use(express.static("./client/build"));
app.get("*", (req, res)=>{
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})

const startApp = () => {
  app.listen(PORT, () => {
    console.log(`📡 Server is running on port: ${PORT}`);
  });
};

connectDB().then(() => {
  startApp();
});

