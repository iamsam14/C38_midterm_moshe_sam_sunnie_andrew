import React from 'react';
import TopFive from './TopFive';
import ProgressBar from '../Timer/ProgressBar';
import score from '../GetTriviaStuff/GetTriviaStuff';
const Scoreboard = ({ score }) => {
  return (
    <div>
      <div id="top-scoreboard">
        <h3>Your Score is {score}</h3>
        <h1>Scoreboard Goes Here</h1>
        <div id="row"></div>
      </div>
    </div>
  );
};

export default Scoreboard;
