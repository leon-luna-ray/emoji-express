import React from 'react';

const UserPosts = ({ posts, formatDateAndTime, deletePost }) => {
  const renderedPosts = posts.map((post, index) => {
    const date = formatDateAndTime(post.createdAt).date;
    const time = formatDateAndTime(post.createdAt).time;
    return (
      <div key={index}>
        <div className='border-black border-[3px] pt-[1rem] px-[1rem] lg:px-[2rem] bg-white flex items-center justify-between'>
          <div className="flex items-center gap-[1rem]">
            <p className='text-[4rem]'> {post.emoji}</p>
            <div className="flex flex-col [&_p]:leading-[50%] font-tertiary gap-0">
              <p className='label-text-2'>{post.name}</p>
              <p>{time}</p>
              <p>{date}</p>
            </div>
          </div>
          <button onClick={() => deletePost(post._id)}>Delete</button>
        </div>
      </div>
    );
  });

  return renderedPosts;
};

export default UserPosts;
