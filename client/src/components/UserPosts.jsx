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
            <div className="flex flex-col font-tertiary gap-0">
              <p className='label-text-2 leading-[80%]'>{post.name}</p>
              <div className='leading-[50%]'>

                <p>{time}</p>
                <p>{date}</p>
              </div>
            </div>
          </div>
          <button className='btn red label-text-3' onClick={() => deletePost(post._id)}>Delete</button>
        </div>
      </div>
    );
  });

  return renderedPosts;
};

export default UserPosts;
