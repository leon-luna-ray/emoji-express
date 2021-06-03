import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/emojiPosts';
import { Container } from '@material-ui/core';
import EmojiGrid from '../EmojiGrid';
import EmojiPosts from '../EmojiPosts';

const HomePage = () => {
  // useDispatch hook from redux
  const dispatch = useDispatch();

  // useEffect takes a callback and an empty array as parameters
  useEffect(() => {
    // dispatch will dispatch an action, here getPosts
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container>
      <EmojiPosts />
      <EmojiGrid />
    </Container>
  );
};

export default HomePage;
