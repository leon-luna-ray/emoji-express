import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createPost, getPosts } from '../actions/posts';
import { Container, Row, Col } from 'react-bootstrap';
import EmojiGrid from './EmojiGrid';
import Mood from './Mood';
import './index.css';
import EmojiPosts from './EmojiPosts';

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

  // Get emoji posts from db, need to make an async function that will await the get posts then assign them to a new state. Then use that state to update both the sidebar and the top (if needed)
  useEffect(() => {
    dispatch(getPosts());
  }, [userEmoji, dispatch]);

  return (
    <Container>
      <Row>
        <Mood userEmoji={userEmoji} />
      </Row>
      <Row>
        <Col>
          <EmojiPosts />
        </Col>
        <Col>
          <EmojiGrid setUserEmoji={setUserEmoji} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
