import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { fetchPosts, createPost, deletePost } from '../lib/api'
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
      await createPost(newPost);
      await fetchUserPosts();
    } catch (error) {
      console.error('Error saving post:', error.message);
    }
  };
  const deleteUserPost = async (postId) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      await deletePost(postId);
      await fetchUserPosts();
    } catch (error) {
      console.error('Error deleting post:', error.message);
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

  // Lifecycle - Handle authentication and initial data fetch
  useEffect(() => {
    const storedToken = localStorage.getItem('token');

    if (!storedToken) {
      navigate('/login');
      return;
    }

    // Uncomment this line to properly set the user from token
    logIn(storedToken);
  }, []);

  // Separate effect to fetch posts when user is available
  useEffect(() => {
    if (user?.id) {
      fetchUserPosts();
    }
  }, [user?.id]);

  if (!user || !isLoggedIn) {
    return null;
  }

  return (
    <div className='lg:flex-col-1'>
      <EmojiGrid currentEmoji={currentEmoji} setCurrentEmoji={setCurrentEmoji} />
      {!!posts.length &&
        <div className="flex-col-1 md:flex-col-2 widget-padding border-black border-[4px] max-lg:border-t-0 bg-cyan">
          <h2 className='label-text-1'>History</h2>
          <div className='grid md:grid-cols-2 gap-[0.5rem]'>
            {posts ? <UserPosts posts={posts} formatDateAndTime={formatDateAndTime} deletePost={deleteUserPost} /> : ''}
          </div>
        </div>
      }
    </div>
  );
};

export default Dasboard;