import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { createPost } from '../../actions/emojiPosts';
import emojis from '../Emojis';
import './style.css';

const EmojiBtn = () => {
  const gridEmojis = emojis;

  const [postData, setPostData] = useState({
    name: '',
    secondary: '',
    type: '',
    level: '',
    emoji: '',
  });

  // Emoji data sucessfully transferred from the emoji file to here to the console from handle click. Will then send this to the backend to save the mood.

  // this will submit the post to the backend along with the previous ones

  // Need to figure out how to both handle the click to submit to the db and update the state at the same time.
  const handleEmoji = e => {
    e.preventDefault();
    console.log(postData);
  };

  return (
    <div className='emoji-div'>
      {gridEmojis.map(emoji => (
        <div
          id={emoji.name}
          className='emoji-btn'
          onClick={e =>
            setPostData({
              ...postData,
              name: emoji.name,
              secondary: emoji.secondary,
              type: emoji.type,
              level: emoji.level,
              emoji: emoji.emoji,
            })
          }
          onClick={handleEmoji}
        >
          <h1>{emoji.emoji}</h1>
          <p>{emoji.name}</p>
        </div>
      ))}
    </div>
  );
}; // emojiBtn

export default EmojiBtn;
