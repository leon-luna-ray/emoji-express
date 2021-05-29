// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { createPost } from '../../actions/emojiPosts';
import emojis from '../Emojis';
import './style.css';

const EmojiBtn = () => {
  const gridEmojis = emojis;

  return (
    <ol>
      {gridEmojis.map(emoji => (
        <li key={emoji.name}>{emoji.emoji}</li>
      ))}
    </ol>
  );
};

export default EmojiBtn;
