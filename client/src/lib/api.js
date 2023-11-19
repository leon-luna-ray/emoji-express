import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_API_URL;

// Posts
export const fetchPosts = async (userId) => {
  try {
    const response = await axios.get(`${baseURL}/posts`, {
      params: {
        userId: userId,
      },
    });
    return response;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};
export const createPost = async (newPost) => {
  try {
    const response = await axios.post(`${baseURL}/posts`, newPost);
    return response;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

// Auth
export const createNewUser = async (data) => {
  try {
      const response = await axios.post(`${baseURL}/auth/register`, data);

      return response;
  } catch (error) {
      throw error;
  }
};
export const loginUser = async (data) => {
  try {
      const response = await axios.post(`${baseURL}/auth/login`, data);

      return response;
  } catch (error) {
      throw error;
  }
};