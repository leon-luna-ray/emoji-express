import React from 'react';

const Mood = ({ userEmoji }) => {
  return (
    <div className='title centered'>
      <h1>
        Today I feel {userEmoji.name} {userEmoji.emoji}
      </h1>
    </div>
  );
};

export default Mood;
