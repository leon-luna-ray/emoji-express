import React from 'react';
import { Container } from '@material-ui/core';
import EmojiGrid from '../EmojiGrid';
import EmojiPosts from '../EmojiPosts';

const HomePage = () => {
  return (
    <Container>
      <EmojiPosts />
      <EmojiGrid />
    </Container>
  );
};

export default HomePage;
