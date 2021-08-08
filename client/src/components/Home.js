import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { getPosts } from '../../actions/emojiPosts';
import { Container } from '@material-ui/core';
import EmojiGrid from './EmojiGrid';
// import EmojiPosts from '../EmojiPosts';

const Home = () => {
  // Set initial state
  const [userEmoji, setUserEmoji] = useState('');

  // Update state and send post to db
  const newUserEmoji = (emoji) => {
    setUserEmoji(emoji);
    // May need to be async as this will need to be sent to the db
    console.log(`newUserEmoji function: the new emoji clicked: ${emoji.name}`);
  };

  // On state change update components
  useEffect(() => {
    // From here you will want to update the top status bar to display the current mood and add to side bar (if/once created)
    console.log(`UseEffect: the user emoji state is ${userEmoji.emoji}`);
  }, [userEmoji]);

  return (
    <Container>
      <EmojiGrid setUserEmoji={setUserEmoji} />
      {/* <EmojiPosts /> */}
    </Container>
  );
};

export default Home;
