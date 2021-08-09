import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions/emojiPosts';
import { Container } from '@material-ui/core';
import EmojiGrid from './EmojiGrid';
import Mood from './Mood';
import './index.css';
// import EmojiPost from './EmojiPost';
// import EmojiPosts from '../EmojiPosts';

const Home = () => {
  // Set initial state
  const [userEmoji, setUserEmoji] = useState('');
  const dispatch = useDispatch();

  // On state change create new post send to db
  useEffect(() => {
    // Prevents creating post on first load
    if (userEmoji !== '') {
      dispatch(createPost(userEmoji));
    }
    return () => {
      // Cleanup function to reset the state
      setUserEmoji('');
    };
  }, [userEmoji, dispatch]);

  return (
    <Container>
      <br />
      <Mood userEmoji={userEmoji} />
      <br />
      <br />
      <br />
      <EmojiGrid setUserEmoji={setUserEmoji} />
      {/* <EmojiPosts /> */}
    </Container>
  );
};

export default Home;
