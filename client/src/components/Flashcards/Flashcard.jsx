import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ProgressBar from '../Timer/ProgressBar';

// import './Flashcard.css';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Flashcard = ({ flashcard, handleNextCard }) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [remainingTime, setRemainingTime] = useState(null);
  const [progressBarCallback, setProgressBarCallback] = useState({
    fn: () => {}
  });

  const handleRevealAnswer = (answer) => {
    // Stop the timer and store the remaining second value
    // process.kill(remainingTime);
    if (!flipped) {
      setFlipped(true);
    }
    // call the remainingTimeCallback to set remainingTime in local stat
    setRemainingTime(progressBarCallback.fn());
    const isAnswerCorrect = answer === flashcard.answer;
    setIsCorrect(isAnswerCorrect);
    // if (isCorrect) {
    //   // Add second counter to seconds accumulator
    // }
  };

  const onNextCardClick = () => {
    // pass remainingTime to parent component to be accumulated
    handleNextCard(isCorrect, remainingTime);
  };

  // sets the getRemainingTime fn that is defined
  // inside progressBar to localState
  const setGetTimeCallback = (cb) => {
    setProgressBarCallback({ fn: cb });

    const result = cb();
    // if there is no more time left, we should flip the card
    // and mark the answer as incorrect
    if (result === 0) {
      setFlipped(true);
      setIsCorrect(false);
    }
  };

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
              onClick={onNextCardClick}
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
      {!flipped && <ProgressBar setCallback={setGetTimeCallback} />}
    </>
  );
};

export default Flashcard;
