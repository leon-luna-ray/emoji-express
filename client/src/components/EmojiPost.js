import React from 'react';
import { List } from 'semantic-ui-react';
// Bug with moment will only display the same amount of time so far on the same day.
import moment from 'moment';

const EmojiPost = ({ post }) => {
  // Moment.js will take the time of the post and automatically calculate how long ago it was posted.
  const sinceCreated = moment(post.createdAt).fromNow();

  return (
    <List.Content key={post._id} className='post-content'>
      <List.Header>
        {post.emoji} {post.name}
      </List.Header>
      <List.Description>{sinceCreated}</List.Description>
    </List.Content>
  );
};

export default EmojiPost;
