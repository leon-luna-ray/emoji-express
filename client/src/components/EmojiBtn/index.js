import React, { useState } from 'react';
// import redux hook useDispatch
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/emojiPosts';

// Props will get passed in from the grid component as an array of objects. This will then be deconstructed and used to render the emoji.
const EmojiBtn = ({ emoji }) => {
  const [emojiState] = useState(emoji);
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(createPost(emojiState));
    // Using window reload on click to get emoji on the page on click. Need to find a way to use state to do this since the time since does show up on click without page reload. 🤔
    window.location.reload(false);
  };

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
