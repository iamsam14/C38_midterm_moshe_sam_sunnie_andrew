import React from 'react';

import Avatar from '../download.jpeg';
import TopFive from './TopFive';

const Scoreboard = () => {
  return (
    <div id="top-scoreboard">
      <h1>The TOP 5 PLAYERS!</h1>
      <div id="row">
        <TopFive />
      </div>
    </div>
  );
};

export default Scoreboard;
