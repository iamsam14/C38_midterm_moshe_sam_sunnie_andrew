import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useSpring, animated as a } from 'react-spring';
// import './Flashcard.css';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Flashcard = ({ flashcard, handleNextCard }) => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  const handleRevealAnswer = (answer) => {
    if (!flipped) {
      setFlipped(true);
    }
    const isAnswerCorrect = answer === flashcard.answer;
    setIsCorrect(isAnswerCorrect);
  };

  return (
    <Card bg="info" text="white">
      {flipped ? (
        <Card.Body>
          <a.div
            className="back"
            style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
          />
          <Card.Title>This is the answer {flashcard.answer}</Card.Title>
          <Button variant="info" onClick={() => handleNextCard(isCorrect)}>
            Next Question!
          </Button>
        </Card.Body>
      ) : (
        <Card.Body>
          <a.div
            className="front"
            style={{
              opacity,
              transform: transform.interpolate((t) => `${t} rotateX(180deg)`)
            }}
          />
          <Card.Text>{flashcard.question}</Card.Text>
          <ListGroup className="flashcard-answers">
            {flashcard.options.map((answer) => {
              return (
                <ListGroupItem
                  variant="info"
                  className="flashcard-answer"
                  onClick={() => handleRevealAnswer(answer)}
                >
                  {answer}
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
