import express from 'express';
// import bodyParser from 'body-parser'; Unsure if this will still be needed
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
// import routes
import postRoutes from './routes/postRoutes.js';

dotenv.config();
const PORT = process.env.PORT || 3001;
const app = express();

// body parsing from express
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(express.json({ limit: '30mb', extended: true }));
app.use(cors());

//routes
app.use('/posts', postRoutes);

// db connection https://www.mongodb.com/cloud/atlas

console.log();
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost/emoji_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  //mongoose will first attempt to connect to db and then run the server
  .then(() => {
    app.listen(PORT, () => {
      console.log(`

        📡 The server is listening on PORT: ${PORT}

    `);
    });
  })
  .catch((error) => {
    console.log(`
        ❌ Database connection error!
        ${error}
    `);
  });

mongoose.set('useFindAndModify', false);
