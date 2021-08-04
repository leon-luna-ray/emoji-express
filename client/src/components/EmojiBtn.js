import React, { useState } from 'react';
// import redux hook useDispatch
import { useDispatch } from 'react-redux';

// Props will get passed in from the grid component as an array of objects. This will then be deconstructed and used to render the emoji.
const EmojiBtn = ({ emoji }) => {
  const [emojiState] = useState(emoji);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    // try to send the state back up through a function in the home page class with emoji grid as the intermediate
    // From the homepage you will then update the state which will then create the post send to the database
  };

  // try doing type=submit
  return (
    <div
      id={emoji.name}
      name={emoji.name}
      className='emoji-btn'
      onClick={handleClick}
    >
      <h1 className='emoji'>{emoji.emoji}</h1>
      <p className='emoji-name'>{emoji.name}</p>
    </div>
  );
};

export default EmojiBtn;
