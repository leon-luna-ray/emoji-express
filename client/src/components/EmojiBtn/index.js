import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/emojiPosts';
import './style.css';

const EmojiBtn = () => {
  const [emojiData, setEmojiData] = useState({
    name: '',
    emoji: '',
    createdAt: {
      type: Date,
      default: Date(),
    },
  });
  // react-redux dispatch will facilitate send/receive data from back end
  const dispatch = useDispatch();

  const handleClick = e => {
    console.log('Click Happy!');

    e.preventDefault();
    setEmojiData({ ...emojiData, name: 'happy', emoji: '😀' });
    dispatch(createPost(emojiData));
  };
  return (
    <div className='emoji-div' onClick={handleClick}>
      <h1 className='emoji'>😀</h1>
      <p>Happy</p>
    </div>
  );
};

export default EmojiBtn;
