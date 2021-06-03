import React from 'react';
import { useSelector } from 'react-redux';
import EmojiPost from '../EmojiPost';

const EmojiPosts = () => {
  const posts = useSelector(state => state.posts);

  return (
    <div className='emoji-posts'>
      {posts.map(post => (
        <div>
          <h1>Today I feel...</h1>
          <EmojiPost post={post} />
        </div>
      ))}
    </div>
  );
};

export default EmojiPosts;
