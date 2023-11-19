import React from 'react';

const UserPosts = ({ posts, formatDateAndTime }) => {
  const renderedPosts = posts.map((post, index) => {
    const date = formatDateAndTime(post.createdAt).date;
    const time = formatDateAndTime(post.createdAt).time;
    return (
      <div key={index}>
        <div className='border py-[1rem] rounded-md text-center'>
          <h1 className='text-[3rem]'> {post.emoji}</h1>
          <p className='capitalize'>{post.name}</p>
          <p>{time}</p>
          <p className='post-subtext'>{date}</p>
        </div>
      </div>
    );
  });

  return renderedPosts;
};

export default UserPosts;
