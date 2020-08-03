import React, { useState } from 'react';
import Scoreboard from './components/Scoreboard/Scoreboard';
import Timer from './components/Timer/Timer';
import AddPlayerForm from './components/Newplayer/AddPlayerForm';
import GetTriviaStuff from './components/GetTriviaStuff/GetTriviaStuff';
import Flashcardlist from './components/Flashcards/FlashcardList';
import './components/Scoreboard/Scoreboard.css';

const App = () => {
  return (
    <div id="container">
      <Scoreboard />
      <GetTriviaStuff />
      <AddPlayerForm />
      <Timer />
    </div>
  );
};

// const sampleFlashcards = [
//   {
//     id: 1,
//     question: 'What is 2 + 2?',
//     correct_answer: '4',
//     answers: ['3', '4', '5', '6']
//   },
//   {
//     id: 2,
//     question: 'What color is the sky?',
//     correct_answer: 'blue',
//     answers: ['yellow', 'blue', 'green', 'red']
//   },
//   {
//     id: 3,
//     question:
//       'What did Ross say to Rachel after sleeping with the girl from the copy place?',
//     correct_answer: 'We were on a BREAK!',
//     answers: [
//       'We were on a BREAK!',
//       "I didn't do it!",
//       'SHE came onto ME!',
//       'Yeah, well, so did you!'
//     ]
//   }
// ];

export default App;
