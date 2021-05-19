// this facilitates requests from the front end to the database
import emojiPost from '../models/emojiPost.js';

export const getPosts = async (req, res) => {
  // for testing
  console.log(`
        📟 GET request received!
    `);
  try {
    // async await for the db to return the data then send res 200
    const emojiPosts = await emojiPost.find();
    // return promise with res 200
    res.status(200).json(emojiPosts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  console.log(`
        📌 POST request received!
    `);
  // input from the front end creates a post request in req.body
  const post = req.body;
  const newPost = new emojiPost(post);

  // async await for post to save to db and return 201
  try {
    await newPost.save();
    res.status(201).json(
      console.log(`
            ${newPost}

            💾 New POST saved to database.
    `)
    );
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
