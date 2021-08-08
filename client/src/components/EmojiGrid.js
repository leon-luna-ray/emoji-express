import React from 'react';
import EmojiBtn from './EmojiBtn';
import emojis from './Emojis';
import './EmojiGrid.css';

const EmojiGrid = ({ setUserEmoji }) => {
  const emojiSet = emojis;

  // Render emoji btns by importing them from the emoji file.
  // Will need to find a way to create a new row every six buttons.
  // you may want to try doing two returns within here to get the styling

  // try using the modulus operator

  // create another return for the rendered buttons
  const renderedRows = () => {
    emojiSet.forEach((row, index) => {
      const renderedRow = () => {
        row.map((emoji) => {
          return (
            <div className='emoji-div'>
              <EmojiBtn
                key={emoji.name}
                emoji={emoji}
                setUserEmoji={setUserEmoji}
              />
            </div>
          );
        });
      };

      return (
        <div key={index} className='row'>
          {renderedRow}
        </div>
      );
    });
  };

  return <div className='emoji-gird'>{renderedRows}</div>;
};

export default EmojiGrid;
