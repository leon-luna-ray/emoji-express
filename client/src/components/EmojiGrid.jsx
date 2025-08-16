import React from 'react';
import emojis from '../lib/emojis';
import EmojiBtn from './EmojiBtn';
import MoodBar from './MoodBar';

const EmojiGrid = ({ currentEmoji, setCurrentEmoji }) => {
  const renderEmojiBtns = emojis.map((emoji, index) => {
    return <EmojiBtn key={index} index={index} emoji={emoji} setCurrentEmoji={setCurrentEmoji} />
  });

  return (
    <div className='border-[4px] border-black bg-white p-[2rem] flex-col-1 md:flex-col-2'>
      <h2 className='label-text-1'>Select an Emoji</h2>
      {/* <MoodBar currentEmoji={currentEmoji} /> */}
      <div className='grid grid-cols-3 md:grid-cols-4 gap-[0.5rem] md:gap-[1.25rem]'>{renderEmojiBtns}</div>
    </div>
  );
};

export default EmojiGrid;
