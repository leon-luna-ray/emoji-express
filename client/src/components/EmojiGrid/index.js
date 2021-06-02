import React, { useState } from 'react';
import EmojiBtn from '../EmojiBtn';
import emojis from '../Emojis';
import './style.css';

const EmojiGrid = () => {
  const gridEmojis = emojis;

  const [postData, setPostData] = useState({
    name: '',
    secondary: '',
    type: '',
    level: '',
    emoji: '',
  });

  const handleClick = e => {
    e.preventDefault();
    console.log('click!');
  };

  // Render emoji btns by importing them from the emoji file.
  // Will need to find a way to create a new row every six buttons.
  return (
    <div className='emoji-grid'>
      <div className='emoji-div'>
        {gridEmojis.map(emoji => (
          <EmojiBtn
            key={emoji.name}
            emoji={emoji}
            value={postData.emoji}
            onClick={e => setPostData({ ...postData, emoji: e.target.value })}
          />
        ))}
      </div>
    </div>
  );
};

export default EmojiGrid;
