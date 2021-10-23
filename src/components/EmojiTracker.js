import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EmojiGrid from './EmojiGrid';
// import UserPosts from './UserPosts';
import { Container } from 'react-bootstrap';
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
      <EmojiGrid
        currentEmoji={currentEmoji}
        setCurrentEmoji={setCurrentEmoji}
      />
      {/* <UserPosts posts={posts} /> */}
    </Container>
  );
};

export default EmojiTracker;
