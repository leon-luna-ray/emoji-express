import React from 'react';

const EmojiBtn = ({ emoji, setCurrentEmoji }) => {
  return (
    <div
      id={emoji.name}
      name={emoji.name}
      className='text-center hover:cursor-pointer'
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
