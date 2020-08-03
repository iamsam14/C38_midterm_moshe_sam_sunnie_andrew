import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
// import './Flashcard.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const Flashcard = ({ flashcard }) => {
  const [flip, setFlip] = useState(false);

  return (
    <Card
      bg="info"
      text="white"
      className={`card ${flip ? 'flip' : ''}`}
      onClick={() => setFlip(!flip)}
    >
      <Card.Body className="front">
        <Card.Text>{flashcard.question}</Card.Text>
        <ListGroup className="flashcard-answers">
          {flashcard.answers.map((answer) => {
            return (
              <ListGroupItem bg="info" className="flashcard-answer">
                {answer}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Card.Body>
      <Card.Body className="back">{flashcard.correct_answer}</Card.Body>
      {flip ? flashcard.correct_answer : flashcard.question}
    </Card>
  );
};

export default Flashcard;
