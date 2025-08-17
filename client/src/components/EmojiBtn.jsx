import React from 'react';

const EmojiBtn = ({ index, emoji, setCurrentEmoji }) => {
  const colorMap = [
    'primary',
    'secondary',
    'tertiary',
    'quaternary',
    'quinary',
    'senary',
    'septenary',
    'octonary',
    'nonary',
    'denary',
  ];
  const bgColor = colorMap[index % colorMap.length];

  return (
    <div
      id={emoji.name}
      name={emoji.name}
      className={`emoji-card  ${bgColor}`}
      onClick={() => {
        setCurrentEmoji(emoji);
      }}
    >
      <h1 className='leading-[100%]'>{emoji.emoji}</h1>
      <p className='emoji-name font-tertiary uppercase leading-[100%] font-[600] text-[1.25rem]'>{emoji.name}</p>
    </div>
  );
};

export default EmojiBtn;
