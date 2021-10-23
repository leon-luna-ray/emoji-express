import React from 'react';
import { Card, Col } from 'react-bootstrap';

const UserPosts = ({ posts }) => {
  const renderedPosts = () => {
    console.log(posts);
    posts.map((post, index) => {
      return (
        <Col xs={4} md={3} lg={2}>
          <Card key={index} className='text-center'>
            <h1> {post.emoji}</h1>
            <p className='post-title'>{post.name}</p>
            <p className='post-subtext'>{post.createdAt}</p>
          </Card>
        </Col>
      );
    });
  };
  return renderedPosts;
};

export default UserPosts;
