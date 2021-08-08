import React from 'react';
import emojis from './Emojis';
import EmojiBtn from './EmojiBtn';
import './EmojiGrid.css';

const EmojiGrid = ({ setUserEmoji }) => {
  const emojiSet = emojis;

  const renderRows = (row, index) => {
    return (
      <div key={index} className='row'>
        {row.map((emoji) => {
          return (
            <>
              <EmojiBtn emoji={emoji} setUserEmoji={setUserEmoji} />
            </>
          );
        })}
      </div>
    );
  };

  return <div className='emoji-grid grid'>{emojiSet.map(renderRows)}</div>;
};

export default EmojiGrid;
