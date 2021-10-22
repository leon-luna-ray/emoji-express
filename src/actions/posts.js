import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from '../constants/actionTypes';
// this facilitates interaction with the backend and database from the front end
import * as api from '../api';

// action creators are functions that return an action, here fetch all posts from backend
// special syntax redux thunk allows for the addition of another arrow function with async await
export const getPosts = () => async (dispatch) => {
  try {
    // async await to fetch posts before return/dispatch
    const { data } = await api.fetchPosts();
    // redux uses dispatch in place of return
    // the action is an object with a type and a payload
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// createPost action, data comes from handleSubmit
export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    console.log(`📤 POST request sent!`);
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error);
  }
};
