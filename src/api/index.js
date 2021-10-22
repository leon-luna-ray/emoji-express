// axios is the method by which requests to the back end are made
import axios from 'axios';

const url = 'http://localhost:3001/posts';

// fetch posts from the backend api post route via axios
export const fetchPosts = () => axios.get(url);
// send new post to the back end using the createPost action
export const createPost = newPost => axios.post(url, newPost);
