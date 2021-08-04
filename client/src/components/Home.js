import React from 'react';
// import { useDispatch } from 'react-redux';
// import { getPosts } from '../../actions/emojiPosts';
import { Container } from '@material-ui/core';
import EmojiGrid from './EmojiGrid';
// import EmojiPosts from '../EmojiPosts';

class Home extends React.Component {
  // useDispatch hook from redux
  // const dispatch = useDispatch();

  // // useEffect takes a callback and an empty array as parameters
  // useEffect(() => {
  //   // dispatch will dispatch an action, here getPosts
  //   dispatch(getPosts());
  // }, [dispatch]);
  render() {
    return (
      <Container>
        <EmojiGrid />
        {/* <EmojiPosts /> */}
      </Container>
    );
  }
}

export default Home;
