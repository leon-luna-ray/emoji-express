import React from 'react';
// import { useDispatch } from 'react-redux';
// import { createPost } from '../../actions/emojiPosts';
import emojis from '../Emojis';
import './style.css';

class EmojiBtn extends React.Component {
  render() {
    const gridEmojis = emojis;

    // Emoji data sucessfully transferred from the emoji file to here to the console from handle click. Will then send this to the backend to save the mood.

    const handleClick = (name, secondary, type, level, emoji) => {
      console.log(name, secondary, type, level, emoji);
    };

    return (
      <div className='emoji-div'>
        {gridEmojis.map(emoji => (
          <div
            id={emoji.name}
            className='emoji-btn'
            onClick={handleClick(
              emoji.name,
              emoji.secondary,
              emoji.type,
              emoji.level,
              emoji.emoji
            )}
          >
            <h1>{emoji.emoji}</h1>
            <p>{emoji.name}</p>
          </div>
        ))}
      </div>
    );
  } // render
} // emojiBtn

export default EmojiBtn;
