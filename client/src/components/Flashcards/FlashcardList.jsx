import React from 'react';
import Flashcards from './Flashcards';

const FlashcardList = ({ flashcards }) => {
  return (
    <div className="card-stack">
      {flashcards.map((flashcard) => {
        return <Flashcards flashcard={flashcard} key={flashcard.id} />;
      })}
    </div>
  );
};

export default FlashcardList;
