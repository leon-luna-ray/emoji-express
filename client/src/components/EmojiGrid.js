import React from 'react';
import emojis from './Emojis';
import './EmojiGrid.css';

const EmojiGrid = ({ setUserEmoji }) => {
  const emojiSet = emojis;

  const renderBtn = (emoji, index) => {
    return (
      <div
        key={index}
        id={emoji.name}
        className='emoji-btn col'
        onClick={() => setUserEmoji(emoji)}
      >
        <h1 className='emoji'>{emoji.emoji}</h1>
        <p className='emoji-name'>{emoji.name}</p>
      </div>
    );
  };

  const renderRows = (row, index) => {
    return (
      <div key={index} className='row'>
        {row.map(renderBtn)}
      </div>
    );
  };

  return <div className='emoji-grid grid'>{emojiSet.map(renderRows)}</div>;
};

export default EmojiGrid;
