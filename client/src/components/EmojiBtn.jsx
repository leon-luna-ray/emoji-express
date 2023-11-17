import React from 'react';

const EmojiBtn = ({ emoji, setCurrentEmoji }) => {
  return (
    <div
      id={emoji.name}
      name={emoji.name}
      className='emoji-btn'
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
