import React from 'react';
// Idea: To show the most recent mood immediately without waiting for the db as delays may cause the user to make multiple clicks?

const Header = ({ currentEmoji }) => {
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

export default Header;
