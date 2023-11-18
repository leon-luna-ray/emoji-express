import React from 'react';

const MoodBar = ({ currentEmoji }) => {
  return currentEmoji ? (
    <div className='title centered'>
      <h1>
        Today I feel {currentEmoji.name} {currentEmoji.emoji}
      </h1>
    </div>
  ) : (
    <div className='title centered'>
      <h1>Today I feel...</h1>
    </div>
  );
};

export default MoodBar;
