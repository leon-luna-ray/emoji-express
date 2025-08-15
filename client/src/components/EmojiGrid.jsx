import React from 'react';
import emojis from '../lib/emojis';
import EmojiBtn from './EmojiBtn';
import MoodBar from './MoodBar';

const EmojiGrid = ({ currentEmoji, setCurrentEmoji }) => {
  const renderEmojiBtns = emojis.map((emoji, index) => {
    return <EmojiBtn key={index} index={index} emoji={emoji} setCurrentEmoji={setCurrentEmoji} />
  });

  return (
    <div className='border-[4px] border-black bg-white p-[1.25rem]'>
      {/* <MoodBar currentEmoji={currentEmoji} /> */}
      <div className='grid grid-cols-4 md:grid-cols-4 gap-[2rem]'>{renderEmojiBtns}</div>
    </div>
  );
};

export default EmojiGrid;
