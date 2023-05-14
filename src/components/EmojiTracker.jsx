import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Container, Row, Col } from 'react-bootstrap';
import EmojiGrid from './EmojiGrid';
import UserPosts from './UserPosts';
import DarkModeBtn from './DarkModeBtn';
import '../styles/index.css';

const EmojiTracker = () => {
  const [posts, setPosts] = useState([]);
  const [currentEmoji, setCurrentEmoji] = useState(null);

  // GET ROUTE
  const fetchSavedPosts = () => {
    const savedPosts = localStorage.getItem('emoji-tracker');
    if (!savedPosts) {
      return;
    }
    setPosts(JSON.parse(savedPosts));
  };

  // POST ROUTE
  const savePost = () => {
    const newPost = {
      createdAt: new Date(),
      _id: uuidv4(),
      name: currentEmoji.name,
      secondary: currentEmoji.secondary,
      type: currentEmoji.type,
      level: currentEmoji.level,
      emoji: currentEmoji.emoji,
    };
    const updatedPosts = [newPost, ...posts];
    localStorage.setItem('emoji-tracker', JSON.stringify(updatedPosts));

    fetchSavedPosts();
  };

  const formatDateAndTime = (createdAt) => {
    if (!createdAt) {
      return { date: '', time: '' };
    }
    const date = new Date(createdAt);
    const postDate = date.toLocaleDateString('en-US', {
      dateStyle: 'medium',
    });
    const postTime = date.toLocaleTimeString('en-US', {
      timeStyle: 'short',
    });

    return {
      date: postDate,
      time: postTime,
    };
  };

  // Fetch posts and set to state on mount
  useEffect(() => {
    fetchSavedPosts();
  }, []);

  // Capture post data, set to state and save to local storage on change
  useEffect(() => {
    if (currentEmoji) {
      savePost();
    }
    return;
  }, [currentEmoji]);

  return (
    <Container>
      <Row>
        <Col className='d-flex justify-content-end'>
          <DarkModeBtn />
        </Col>
      </Row>
      <Row>
        <EmojiGrid
          currentEmoji={currentEmoji}
          setCurrentEmoji={setCurrentEmoji}
        />
      </Row>
      <br />
      <br />
      <Row>
        <UserPosts posts={posts} formatDateAndTime={formatDateAndTime} />
      </Row>
    </Container>
  );
};

export default EmojiTracker;
