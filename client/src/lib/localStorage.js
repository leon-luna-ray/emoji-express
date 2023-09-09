import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'posts';

export const fetchPosts = async () => {
    try {
      const postsJson = localStorage.getItem(LOCAL_STORAGE_KEY) || '[]';
      const posts = JSON.parse(postsJson);

      return posts;
    } catch (error) {
      console.error('Error fetching posts from local storage:', error);
      throw error;
    }
  };

export const createPost = async (newPost) => {
  try {
    const postId = uuidv4();
    newPost._id = postId;

    const postsJson = localStorage.getItem(LOCAL_STORAGE_KEY);
    const existingPosts = JSON.parse(postsJson) || [];

    existingPosts.push(newPost);

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existingPosts));

    return newPost;
  } catch (error) {
    console.error('Error creating post and saving to local storage:', error);
    throw error;
  }
};
