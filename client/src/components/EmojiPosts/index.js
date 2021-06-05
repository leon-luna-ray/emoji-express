import React from 'react';
import { useSelector } from 'react-redux';
import EmojiPost from '../EmojiPost';

const EmojiPosts = () => {
  const posts = useSelector(state => state.posts);

  return (
    <div className='emoji-posts'>
      {posts.map(post => (
        <div className='emoji-post'>
          <EmojiPost post={post} />
        </div>
      ))}
    </div>
  );
};

export default EmojiPosts;
