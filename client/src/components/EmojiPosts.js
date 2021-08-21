import React from 'react';
// Hook to get posts from backend
import { useSelector } from 'react-redux';
import { List } from 'semantic-ui-react';
import EmojiPost from './EmojiPost';
import NoPosts from './NoPosts';

const EmojiPosts = () => {
  const posts = useSelector((state) => state.posts).reverse();

  console.log(posts);
  return !posts.length ? (
    <NoPosts />
  ) : (
    <div className='emoji-posts'>
      <List>
        {posts.map((post) => (
          <List.Item key={post._id} className='emoji-post'>
            <EmojiPost post={post} />
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default EmojiPosts;
