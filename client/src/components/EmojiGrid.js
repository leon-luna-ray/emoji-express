import React from 'react';
import emojis from './Emojis';
import EmojiBtn from './EmojiBtn';

const EmojiGrid = ({ setUserEmoji }) => {
  const emojiSet = emojis;

  const renderRows = (row, index) => {
    return (
      <div key={index} className='row'>
        {row.map((emoji, index) => {
          return (
            <>
              <EmojiBtn key={index} emoji={emoji} setUserEmoji={setUserEmoji} />
            </>
          );
        })}
      </div>
    );
  };

  return <div className='emoji-grid grid'>{emojiSet.map(renderRows)}</div>;
};

export default EmojiGrid;
