import React from 'react';

const Scoreboard = ({ match }) => {
  const { score } = match.params;
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
