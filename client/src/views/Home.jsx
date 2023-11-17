import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { fetchPosts, createPost } from '../lib/api'
// Temp use local storage
// import { fetchPosts, createPost } from '../lib/localStorage'

import { Container, Row, Col } from 'react-bootstrap';
import EmojiGrid from '../components/EmojiGrid';
import UserPosts from '../components/UserPosts';
import DarkModeBtn from '../components/DarkModeBtn';
import '../styles/index.css';

const EmojiTracker = () => {
  // State
  const [posts, setPosts] = useState([]);
  const [currentEmoji, setCurrentEmoji] = useState(null);

  // Methods
  const fetchData = async () => {
    const result = await fetchPosts();
    setPosts(result?.data.reverse());
    // Temp use local storage
    // setPosts(result?.reverse());
  };
  const savePost = async () => {
    const newPost = {
      createdAt: new Date(),
      name: currentEmoji.name,
      secondary: currentEmoji.secondary,
      type: currentEmoji.type,
      level: currentEmoji.level,
      emoji: currentEmoji.emoji,
    };
    await createPost(newPost);
    await fetchData();
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

  // Watchers
  useEffect(() => {
    if (currentEmoji) {
      savePost();
    }
    return;
  }, [currentEmoji]);

  // Lifecycle
  useEffect(() => {
    fetchData();
  }, []);

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
