import React from 'react';
// import redux hook useDispatch
import { useDispatch } from 'react-redux';

// Props will get passed in from the grid component as an array of objects. This will then be deconstructed and used to render the emoji.
const EmojiBtn = ({ emoji, newUserEmoji }) => {
  return (
    <div
      id={emoji.name}
      name={emoji.name}
      className='emoji-btn'
      onClick={() => newUserEmoji(emoji)}
    >
      <h1 className='emoji'>{emoji.emoji}</h1>
      <p className='emoji-name'>{emoji.name}</p>
    </div>
  );
};

export default EmojiBtn;
