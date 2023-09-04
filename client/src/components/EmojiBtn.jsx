import React from 'react';
// Props will get passed in from the grid component as an array of objects. This will then be deconstructed and used to render the emoji.
const EmojiBtn = ({ emoji, setCurrentEmoji }) => {
  return (
    <div
      id={emoji.name}
      name={emoji.name}
      className='emoji-btn'
      // Change this click event to display a modal with the option to add details and submit btn.
      onClick={() => {
        setCurrentEmoji(emoji);
      }}
    >
      <h1 className='emoji'>{emoji.emoji}</h1>
      <p className='emoji-name text-uppercase'>{emoji.name}</p>
    </div>
  );
};

export default EmojiBtn;
