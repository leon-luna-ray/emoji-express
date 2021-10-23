import React from 'react';
import { Card, Col } from 'react-bootstrap';

const UserPosts = ({ posts, formatDateAndTime }) => {
  const renderedPosts = posts.map((post, index) => {
    const date = formatDateAndTime(post.createdAt).date;
    const time = formatDateAndTime(post.createdAt).time;
    return (
      <Col key={index} md={6} lg={3}>
        <div className='user-post-card text-center'>
          <h1 className='post-emoji'> {post.emoji}</h1>
          <p className='post-title text-capitalize'>{post.name}</p>
          <p>{time}</p>
          <p className='post-subtext'>{date}</p>
        </div>
      </Col>
    );
  });

  return renderedPosts;
};

export default UserPosts;
