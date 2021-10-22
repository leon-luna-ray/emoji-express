import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EmojiGrid from './EmojiGrid';
import UserPosts from './UserPosts';
import { Container } from 'react-bootstrap';
import './index.css';

const EmojiTracker = () => {
  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem('emoji-tracker'))
  );
  const [userEmoji, setUserEmoji] = useState(null);

  const fetchSavedPosts = () => {
    let posts = JSON.parse(localStorage.getItem('emoji-tracker'));
    if (!posts) {
      posts = [];
      return posts;
    }
    return posts;
    // if there are return the array and parse
  };

  const saveToLocalStorage = () => {
    if (!post) return;

    const savedPosts = fetchSavedPosts();
    localStorage.setItem(
      'emoji-tracker',
      JSON.stringify([post, ...savedPosts])
    );
    setPosts(JSON.parse(localStorage.getItem('emoji-tracker')));
  };

  // Capture post data and set to state on user click
  useEffect(() => {
    if (!userEmoji) return;
    setPost({
      createdAt: new Date(),
      _id: uuidv4(),
      name: userEmoji.name,
      secondary: userEmoji.secondary,
      type: userEmoji.type,
      level: userEmoji.level,
      emoji: userEmoji.emoji,
    });
    saveToLocalStorage();
  }, [userEmoji]);

  return (
    <Container>
      <EmojiGrid userEmoji={userEmoji} setUserEmoji={setUserEmoji} />
      {/* <UserPosts posts={posts} /> */}
    </Container>
  );
};

export default EmojiTracker;
