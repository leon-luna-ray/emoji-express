import React from 'react';
// import redux hook useDispatch
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/emojiPosts';

// Props will get passed in from the grid component as an array of objects. This will then be deconstructed and used to render the emoji.
const EmojiBtn = ({ emoji }) => {
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(
      createPost({
        name: emoji.name,
        secondary: emoji.secondary,
        type: emoji.type,
        level: emoji.level,
        emoji: emoji.emoji,
      })
    );
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
