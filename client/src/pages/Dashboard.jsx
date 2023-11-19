import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { fetchPosts, createPost } from '../lib/api'
import { useAuth } from '../contexts/AuthContext'

import EmojiGrid from '../components/EmojiGrid';
import UserPosts from '../components/UserPosts';
// import DarkModeBtn from '../components/DarkModeBtn';

const Dasboard = () => {
  const navigate = useNavigate();

  // State
  const { user, isLoggedIn, logIn } = useAuth();
  const [posts, setPosts] = useState([]);
  const [currentEmoji, setCurrentEmoji] = useState(null);

  // Methods
  const fetchUserPosts = async () => {
    try {
      const result = await fetchPosts(user?.id);
      setPosts(result?.data.reverse());
    } catch (error) {
      console.error('Error fetching posts:', error.message);
    }
  };

  const savePost = async () => {
    try {
      const newPost = {
        userId: user.id,
        createdAt: new Date(),
        name: currentEmoji.name,
        secondary: currentEmoji.secondary,
        type: currentEmoji.type,
        level: currentEmoji.level,
        emoji: currentEmoji.emoji,
      };
      createPost(newPost);
      fetchUserPosts();
    } catch (error) {
      console.error('Error saving post:', error.message);
    }
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
    const storedToken = localStorage.getItem('token');

    if (storedToken) {
      logIn(storedToken);
      fetchUserPosts();
    }
    else if (!user || !isLoggedIn) {
      navigate('/login')
    }
  }, []);

  if (!user || !isLoggedIn) {
    return null;
  }

  return (
    <div className='container flex-col-4'>
      <EmojiGrid currentEmoji={currentEmoji} setCurrentEmoji={setCurrentEmoji} />
      <div className='grid grid-cols-2 md:grid-cols-4'>
        {posts ? <UserPosts posts={posts} formatDateAndTime={formatDateAndTime} /> : ''}
      </div>
    </div>
  );
};

export default Dasboard;
