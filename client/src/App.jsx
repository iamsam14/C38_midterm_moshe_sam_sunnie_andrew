import React, { useState, useEffect, Component } from 'react';
// import { AppContextProvider } from './context/AppContext';
// import ContextDemo from './components/ContextDemo';
import './App.css';
import Flashcardlist from './components/Flashcards/FlashcardList';

const App = () => {
  const [flashcards, setFlashcards] = useState(sampleFlashcards);

  return <Flashcardlist flashcards={flashcards} />;
};

/**
 * PLACEHOLDER QUESTIONS
 */

const sampleFlashcards = [
  {
    id: 1,
    question: 'What is 2 + 2?',
    correct_answer: '4',
    incorrect_answers: ['3', '5', '6']
  },
  {
    id: 2,
    question: 'What color is the sky?',
    correct_answer: 'blue',
    incorrect_answers: ['yellow', 'greem', 'red']
  },
  {
    id: 3,
    question:
      'What did Ross say to Rachel after sleeping with the girl from the copy place?',
    correct_answer: 'We were on a BREAK!',
    incorrect_answers: [
      "I didn't do it!",
      'SHE came onto ME!',
      'Yeah, well, so did you!'
    ]
  }
];

export default App;
