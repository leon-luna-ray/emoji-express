import React from 'react';
// import { useDispatch } from 'react-redux';
// import { getPosts } from '../../actions/emojiPosts';
import { Container } from '@material-ui/core';
import EmojiGrid from './EmojiGrid';
// import EmojiPosts from '../EmojiPosts';

const Home = () => {
  // May need to be async as this will need to be sent to the db, test to see if you can get it into the db. Will re-render when the data is returned.
  const newUserEmoji = (emoji) => {
    console.log(`log the emoji clicked: ${emoji}`);
  };

  return (
    <Container>
      <EmojiGrid newUserEmoji={newUserEmoji} />
      {/* <EmojiPosts /> */}
    </Container>
  );
};

export default Home;
