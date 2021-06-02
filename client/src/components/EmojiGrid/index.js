import React from 'react';
import EmojiBtn from '../EmojiBtn';
import emojis from '../Emojis';
import './style.css';

const EmojiGrid = () => {
  const gridEmojis = emojis;

  // Render emoji btns by importing them from the emoji file.
  // Will need to find a way to create a new row every six buttons.
  return (
    <div className='emoji-grid'>
      <div className='emoji-div'>
        {gridEmojis.map(emoji => (
          <EmojiBtn key={emoji.name} emoji={emoji} />
        ))}
      </div>
    </div>
  );
};

export default EmojiGrid;
