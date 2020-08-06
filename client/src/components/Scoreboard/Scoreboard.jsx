import React from 'react';
import './Scoreboard.css';
const Scoreboard = ({ match }) => {
  const { score } = match.params;
  return (
    <div>
      <div id="top-scoreboard">
        <h1>Your Trivia Jedi Masters: </h1>
        <div className="top-five">
          <div className="box">
            <p>Ernie</p>
            <br></br>
            <p>Score: 1,000,000</p>
          </div>
          <div className="box">
            <p>SamtheMan</p>
            <br></br>
            <p>Score: 800,000</p>
          </div>
          <div className="box">
            <p>Yoda</p>
            <br></br>
            <p>Score: 780,000</p>
          </div>
          <div className="box">
            <p>Eric Cartman</p>
            <br></br>
            <p>Score: 600,000</p>
          </div>
          <div className="box">
            <p>NewPlayer</p>
            <br></br>
            <p>Score: {score}</p>
          </div>
        </div>
        <h3>
          Your Score is: <span>{score}</span>
        </h3>
      </div>
    </div>
  );
};
export default Scoreboard;
