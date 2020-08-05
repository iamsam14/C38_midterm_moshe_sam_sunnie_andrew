import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ProgressBar from '../Timer/ProgressBar';

// import './Flashcard.css';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Flashcard = ({ flashcard, handleNextCard, remainingTime }) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const handleRevealAnswer = (answer) => {
    // Stop the timer and store the remaining second value
    // process.kill(remainingTime);
    console.log(remainingTime);
    if (!flipped) {
      setFlipped(true);
    }
    const isAnswerCorrect = answer === flashcard.answer;
    setIsCorrect(isAnswerCorrect);
    // if (isCorrect) {
    //   // Add second counter to seconds accumulator
    // }
  };
  console.log(flashcard);
  return (
    <>
      <Card bg="info" text="white" className="flashcard">
        {flipped ? (
          <Card.Body className="flashcard-back">
            <Card.Title>This is the answer {flashcard.answer}</Card.Title>
            <Button
              size="xxl"
              block
              variant="info"
              text="white"
              onClick={() => handleNextCard(isCorrect)}
            >
              {flashcard.next === null ? 'See your score!!' : 'Next Question'}
            </Button>
          </Card.Body>
        ) : (
          <Card.Body className="flashcard-front">
            <Card.Text>{flashcard.question}</Card.Text>
            <ListGroup className="flashcard-answers">
              {flashcard.options.map((answer) => {
                return (
                  <ListGroupItem
                    key={(flashcard.id += 1)}
                    variant="info"
                    className="flashcard-answer"
                    onClick={() => handleRevealAnswer(answer)}
                  >
                    <Button variant="info" text="white" block></Button>
                  </ListGroupItem>
                );
              })}
            </ListGroup>
          </Card.Body>
        )}
      </Card>
      <ProgressBar />
    </>
  );
};

export default Flashcard;
