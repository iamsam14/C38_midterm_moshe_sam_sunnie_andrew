import React from 'react';
import TopFive from './TopFive';
import ProgressBar from '../Timer/ProgressBar';

const Scoreboard = () => {
  return (
    <div>
      <div id="top-scoreboard">
        <ProgressBar />
        <h1>The TOP 5 PLAYERS!</h1>
        <div id="row"></div>
      </div>
    </div>
  );
};

export default Scoreboard;
