// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { createPost } from '../../actions/emojiPosts';
import emojis from '../Emojis';
import './style.css';

const EmojiBtn = () => {
  const gridEmojis = emojis;

  const handleClick = () => {};

  return (
    <div className='emoji-div' onClick={handleClick}>
      {gridEmojis.map(emoji => (
        <div className='emoji-btn'>
          <h1>{emoji.emoji}</h1>
          <p>{emoji.name}</p>
        </div>
      ))}
    </div>
  );
};

export default EmojiBtn;
