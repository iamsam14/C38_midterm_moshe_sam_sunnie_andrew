import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './Flashcard.css';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Flashcard = ({ flashcard, handleNextCard }) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const handleRevealAnswer = (answer) => {
    // Stop the timer and store the remaining second value
    if (!flipped) {
      setFlipped(true);
    }
    const isAnswerCorrect = answer === flashcard.answer;
    setIsCorrect(isAnswerCorrect);
    if (isCorrect) {
      // Add second counter to seconds accumulator
    }
  };

  return (
    <Card bg="info" text="white" className="flashcard">
      {flipped ? (
        <Card.Body className="flashcard-back">
          <Card.Title>This is the answer {flashcard.answer}</Card.Title>
          <Button
            size="xxl"
            block
            variant="info"
            onClick={() => handleNextCard(isCorrect)}
          >
            Next Question!
          </Button>
        </Card.Body>
      ) : (
        <Card.Body classname="flashcard-front">
          <Card.Text>{flashcard.question}</Card.Text>
          <ListGroup className="flashcard-answers">
            {flashcard.options.map((answer) => {
              return (
                <ListGroupItem
                  variant="info"
                  className="flashcard-answer"
                  onClick={() => handleRevealAnswer(answer)}
                >
                  <Button variant="info" block>
                    {answer}
                  </Button>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Card.Body>
      )}
    </Card>
  );
};

export default Flashcard;
