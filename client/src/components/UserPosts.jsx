import React from 'react';

const UserPosts = ({ posts, formatDateAndTime }) => {
  const renderedPosts = posts.map((post, index) => {
    const date = formatDateAndTime(post.createdAt).date;
    const time = formatDateAndTime(post.createdAt).time;
    return (
      <div key={index}>
        <div className='border-black border-[3px] py-[1rem] text-center'>
          <div className="flex flex-col items-center gap-[0.5rem]">
            <p className='text-[1.5rem]'> {post.emoji}</p>
            <p className='label-text-2'>{post.name}</p>
            <div className="flex flex-col gap-[0.5rem]">

              <p>{time}</p>
              <p className='post-subtext'>{date}</p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return renderedPosts;
};

export default UserPosts;
