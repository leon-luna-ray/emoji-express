import React from 'react';
// Hook to get posts from backend
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import EmojiPost from './EmojiPost';
import NoPosts from './NoPosts';

const EmojiPosts = () => {
  const posts = useSelector((state) => state.posts).reverse();

  console.log(posts);
  return !posts.length ? (
    <NoPosts />
  ) : (
    <div className='emoji-posts'>
      <ListGroup>
        {posts.map((post) => (
          <ListGroup.Item key={post._id} className='emoji-post'>
            <EmojiPost post={post} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default EmojiPosts;
