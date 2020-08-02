import React from 'react';

import Avatar from '../download.jpeg';

const Scoreboard = () => {
  return (
    <div id="top-scoreboard">
      <h1 id="top">The TOP 5 PLAYERS!</h1>

      <div className="top-players">
        <span role="img">&#9734;</span>
        <h3>Name: </h3>
        <h3>Score: </h3>
      </div>
      <div className="top-players">
        <img src="../download.jpeg" alt="x"></img>
        <h3>Name: </h3>
        <h3>Score: </h3>
      </div>
      <div className="top-players">
        <img src="../download.jpeg" alt="x"></img>
        <h3>Name: </h3>
        <h3>Score: </h3>
      </div>
      <div className="top-players">
        <img src="../download.jpeg" alt="x"></img>
        <h3>Name: </h3>
        <h3>Score: </h3>
      </div>
      <div className="top-players">
        <img src="../download.jpeg" alt="x"></img>
        <h3>Name: </h3>
        <h3>Score: </h3>
      </div>
    </div>
  );
};

export default Scoreboard;
