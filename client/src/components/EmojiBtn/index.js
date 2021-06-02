import React from 'react';

// Props will get passed in from the grid component as an array of objects. This will then be deconstructed and used to render the emoji.
const emojiBtn = ({ emoji }) => {
  return (
    <div id={emoji.name} className='emoji-btn'>
      <h1 className='emoji'>{emoji.emoji}</h1>
      <p className='emoji-name'>{emoji.name}</p>
    </div>
  );
};

export default emojiBtn;
