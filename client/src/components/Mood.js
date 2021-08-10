import React from 'react';
// Idea: To show the most recent mood immediately without waiting for the db as delays may cause the user to make multiple clicks?

const Mood = ({ userEmoji }) => {
  return (
    <div className='title centered'>
      <h1>Today I feel</h1>
    </div>
  );
};

export default Mood;
