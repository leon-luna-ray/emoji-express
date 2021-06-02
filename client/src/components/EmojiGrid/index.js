import React from 'react';
import EmojiBtn from '../EmojiBtn';
import emojis from '../Emojis';

const EmojiGrid = () => {
  const gridEmojis = emojis;

  // Render emoji btns by importing them from the emoji file.
  // Will need to find a way to create a new row every six buttons.
  return (
    <div className='emoji-grid'>
      {gridEmojis.map(emoji => (
        <EmojiBtn emoji={emoji} />
      ))}
    </div>
  );
};

export default EmojiGrid;
