import React from 'react';
// Bug with moment will only display the same amount of time so far on the same day.
import moment from 'moment';

const EmojiPost = ({ post }) => {
  // Moment.js will take the time of the post and automatically calculate how long ago it was posted.
  const sinceCreated = moment(post.createdAt).fromNow();

  return (
    <div key={post._id} className='post-content'>
      <h4>
        {post.emoji} {post.name}
      </h4>
      <p>{sinceCreated}</p>
    </div>
  );
};

export default EmojiPost;
