import React from 'react';

const EmojiPost = ({ post }) => {
  return (
    <div>
      <h1>{post.emoji}</h1>
      <p>{post.name}</p>
    </div>
  );
};

export default EmojiPost;
