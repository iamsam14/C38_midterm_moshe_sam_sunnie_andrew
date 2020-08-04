import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
// import './Flashcard.css';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Flashcard = ({ flashcard, handleNextCard }) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const handleRevealAnswer = (answer) => {
    if (!flipped) {
      setFlipped(true);
    }
    const isAnswerCorrect = answer === flashcard.answer;
    setIsCorrect(isAnswerCorrect);
  };

  return (
    <Card bg="info" text="dark" className={`card ${flipped ? 'flip' : ''}`}>
      <Card.Body className={flipped ? 'back' : 'front'}>
        {flipped ? (
          <div>
            <h1>This is the answer {flashcard.answer}</h1>
            <button onClick={() => handleNextCard(isCorrect)}>
              Next Question!
            </button>
          </div>
        ) : (
          <>
            <Card.Text>{flashcard.question}</Card.Text>
            <ListGroup className="flashcard-answers">
              {flashcard.options.map((answer) => {
                return (
                  <ListGroupItem
                    bg="info"
                    className="flashcard-answer"
                    onClick={() => handleRevealAnswer(answer)}
                  >
                    {answer}
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </>
        )}
      </Card.Body>
      <Card.Body className="back">{flashcard.correct_answer}</Card.Body>
    </Card>
  );
};

export default Flashcard;

// className={`flashcard-option ${ option === flashcard.answer ? 'true' : 'false'}`}
// key={option}
// onClick={() => setFlip(!flip) }>
//     {option}
