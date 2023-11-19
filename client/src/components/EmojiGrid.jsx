import React from 'react';
import emojis from '../lib/emojis';
import EmojiBtn from './EmojiBtn';
import MoodBar from './MoodBar';

const EmojiGrid = ({ currentEmoji, setCurrentEmoji }) => {
  const renderEmojiBtns = emojis.map((emoji, index) => {
    return <EmojiBtn key={index} emoji={emoji} setCurrentEmoji={setCurrentEmoji} />
  });

  return (
    <div className='flex-col-2'>
      <MoodBar currentEmoji={currentEmoji} />
      <div className='grid grid-cols-4 md:grid-cols-6'>{renderEmojiBtns}</div>
    </div>
  );
};

export default EmojiGrid;
