import React from 'react';
import EmojiBtn from './EmojiBtn';
import emojis from './Emojis';
import './EmojiGrid.css';

const EmojiGrid = ({ setUserEmoji }) => {
  const gridEmojis = emojis;

  // Render emoji btns by importing them from the emoji file.
  // Will need to find a way to create a new row every six buttons.
  // you may want to try doing two returns within here to get the styling

  // try using the modulus operator

  // create another return for the rendered buttons
  const renderedBtns = () => {
    <div className='row'>{emojis.forEach((emoji, index) => {})}</div>;
  };

  return (
    <div className='emoji-grid'>
      <div className='emoji-div'>
        {gridEmojis.map((emoji) => (
          <EmojiBtn
            key={emoji.name}
            emoji={emoji}
            setUserEmoji={setUserEmoji}
          />
        ))}
      </div>
    </div>
  );
};

export default EmojiGrid;
