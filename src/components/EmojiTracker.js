import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EmojiGrid from './EmojiGrid';
// import UserPosts from './UserPosts';
import { Container } from 'react-bootstrap';
import './index.css';

const EmojiTracker = () => {
  const [posts, setPosts] = useState([]);
  const [userEmoji, setUserEmoji] = useState(null);

  const fetchSavedPosts = () => {
    const savedPosts = localStorage.getItem('emoji-tracker');
    if (!savedPosts) {
      return;
    }
    setPosts(JSON.parse(savedPosts));
  };

  const savePost = () => {
    const newPost = {
      createdAt: new Date(),
      _id: uuidv4(),
      name: userEmoji.name,
      secondary: userEmoji.secondary,
      type: userEmoji.type,
      level: userEmoji.level,
      emoji: userEmoji.emoji,
    };
    const updatedPosts = [newPost, ...posts];
    localStorage.setItem('emoji-tracker', JSON.stringify(updatedPosts));
    fetchSavedPosts();
    console.log(updatedPosts);
  };

  useEffect(() => {
    fetchSavedPosts();
  }, []);

  // Capture post data and set to state on user click
  useEffect(() => {
    if (userEmoji) {
      savePost();
    }
    return;
  }, [userEmoji]);
  console.log(posts);
  return (
    <Container>
      <EmojiGrid userEmoji={userEmoji} setUserEmoji={setUserEmoji} />
      {/* <UserPosts posts={posts} /> */}
    </Container>
  );
};

export default EmojiTracker;
