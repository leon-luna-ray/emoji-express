// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { createPost } from '../../actions/emojiPosts';
import emojis from '../Emojis';
import './style.css';

const EmojiBtn = () => {
  // need to figure out how to get props to the back end on clicck.
  const gridEmojis = emojis;

  return (
    <div className='emoji-div'>
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
