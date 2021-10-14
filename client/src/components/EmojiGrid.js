import React from 'react';
import emojis from './emojis';
import EmojiBtn from './EmojiBtn';
import { Container, Col, Row } from 'react-bootstrap';

const EmojiGrid = ({ setUserEmoji }) => {
  const emojiBtns = emojis.map((emoji, index) => {
    return (
      <Col>
        <EmojiBtn key={index} emoji={emoji} setUserEmoji={setUserEmoji} />
      </Col>
    );
  });

  // Method takes an array and will return rows with in groups of 3
  const renderRows = (buttons) => {
    // Regrouped items pushed to this array
    const rows = [];
    // Loop through the array and arrange in rows of 6
    while (buttons.length) {
      rows.push(buttons.splice(0, 6));
    }
    // When the loop is complete map each group to create a new row
    const renderedRows = rows.map((row, index) => {
      return <Row key={index}>{row}</Row>;
    });

    return renderedRows;
  };

  return <Container>{renderRows(emojiBtns)}</Container>;
};

export default EmojiGrid;
