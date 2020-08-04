import React from 'react';
import TopFive from './TopFive';

const Scoreboard = () => {
  return (
    <div>
      <div id="top-scoreboard">
        <h1>The TOP 5 PLAYERS!</h1>
        <div id="row">
          <TopFive />
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
