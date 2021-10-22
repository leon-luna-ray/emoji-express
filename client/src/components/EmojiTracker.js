import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EmojiGrid from './EmojiGrid';
import './index.css';

const EmojiTracker = () => {
  const [post, setPost] = useState(null);
  const [posts, setPosts] = useState(null);
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
    setPosts(fetchSavedPosts());
  };

  // Capture post data and set to state on user click
  useEffect(() => {
    setPost({
      createdAt: new Date(),
      _id: uuidv4(),
      data: userEmoji,
    });
    saveToLocalStorage();
  }, [userEmoji]);

  return <EmojiGrid userEmoji={userEmoji} setUserEmoji={setUserEmoji} />;
};

export default EmojiTracker;
