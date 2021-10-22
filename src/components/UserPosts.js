import React from 'react';

const UserPosts = ({ posts }) => {
  console.log(posts);
  return posts ? (
    <div>
      {posts.map((post, index) => {
        return <div>{post.emoji}</div>;
      })}
    </div>
  ) : (
    <h1>🤷🏻‍♂️ No Posts 🤷🏻‍♂️</h1>
  );
};

export default UserPosts;
