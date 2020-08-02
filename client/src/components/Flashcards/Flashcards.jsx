import React from 'react';
import './Flashcards.css';
const Flashcards = ({ flashcard }) => {
  return <div>{flashcard.question}</div>;
};

export default Flashcards;
