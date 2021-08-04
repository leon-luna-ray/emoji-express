import React from 'react';
import moment from 'moment';

const EmojiPost = ({ post }) => {
  // Moment.js will take the time of the post and automatically calculate how long ago it was posted.
  const sinceCreated = moment(post.createdAt).fromNow();

  return (
    <div key={post._id} className='post-content'>
      <h1>{post.emoji}</h1>
      <p>{post.name}</p>
      <p>{sinceCreated}</p>
    </div>
  );
};

export default EmojiPost;
