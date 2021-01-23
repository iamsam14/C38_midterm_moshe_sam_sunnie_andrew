import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import ProgressBar from '../Timer/ProgressBar';

import './Flashcard.css';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Flashcard = ({ flashcard, handleNextCard }) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [remainingTime, setRemainingTime] = useState(null);
  const [progressBarCallback, setProgressBarCallback] = useState({
    fn: () => {}
  });

  const handleRevealAnswer = (answer) => {
    if (!flipped) {
      setFlipped(true);
    }

    setRemainingTime(progressBarCallback.fn());
    const isAnswerCorrect = answer === flashcard.answer;
    setIsCorrect(isAnswerCorrect);
  };

  const onNextCardClick = () => {
    handleNextCard(isCorrect, remainingTime);
  };

  const setGetTimeCallback = (cb) => {
    setProgressBarCallback({ fn: cb });

    const result = cb();
    if (result === 0) {
      setFlipped(true);
      setIsCorrect(false);
    }
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
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
            <Card.Body
              // {isflipped ? : style={{}}}
              className="flashcard-front"
            >
              <Card.Text>{flashcard.question}</Card.Text>
              <ListGroup className="flashcard-answers">
                {flashcard.options.map((answer) => {
                  return (
                    <ListGroupItem
                      key={(flashcard.id += 1)}
                      variant="info"
                      text="black"
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
        <div>
          {!flipped && <ProgressBar setCallback={setGetTimeCallback} />}
        </div>
      </div>
    </>
  );
};

export default Flashcard;
