import React from 'react';
// import { useDispatch } from 'react-redux';
// import { getPosts } from '../../actions/emojiPosts';
import { Container } from '@material-ui/core';
import EmojiGrid from './EmojiGrid';
// import EmojiPosts from '../EmojiPosts';

class Home extends React.Component {
  state = { userEmoji: null };

  // May need to be async as this will need to be sent to the db
  newUserEmoji = (emoji) => {
    this.setState({ userEmoji: emoji });
    console.log(`Inside newUserEmoji Method : ${emoji.name}
    `);
  };

  render() {
    return (
      <Container>
        <EmojiGrid newUserEmoji={this.newUserEmoji} />
        {/* <EmojiPosts /> */}
      </Container>
    );
  }
}

export default Home;
