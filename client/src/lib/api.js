import axios from 'axios';

const baseURL = import.meta.env.VITE_BASE_API_URL;

const axiosInstance = axios.create({
  baseURL,
});

const setAuthToken = (token) => {
  if (token) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
};

// Posts
export const fetchPosts = async (userId, token) => {
  try {
    setAuthToken(token);

    const response = await axiosInstance.get('/posts', {
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

export const createPost = async (newPost, token) => {
  try {
    setAuthToken(token);

    const response = await axiosInstance.post('/posts', newPost);
    return response;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

// Auth
export const createNewUser = async (data) => {
  try {
    const response = await axiosInstance.post('/auth/register', data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axiosInstance.post('/auth/login', data);
    return response;
  } catch (error) {
    throw error;
  }
};
