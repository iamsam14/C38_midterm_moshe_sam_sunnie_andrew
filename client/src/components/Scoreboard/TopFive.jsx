import React, { useState } from 'react';
import PropTypes from 'prop-types';
let nextId = 4;
function Stats(props) {
  let totalPlayers = props.players.length;
  let totalPoints = props.players.reduce((acc, next) => (acc += next.score), 0);
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table>
  );
}
const Stopwatch = (props) => {
  const [timerRunning, setTimerRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [previousTime, setPreviousTime] = useState(0);
  const [intervals, setIntervals] = useState();
  let seconds = Math.floor(elapsedTime / 1000);
  const componentDidMount = () => {
    setInterval(onTick, 100);
  };
  const componentWillUnmount = () => {
    clearInterval(intervals);
  };
  const onStop = () => {
    setTimerRunning(false);
  };
  const onTick = () => {
    if (timerRunning) {
      let now = Date.now();
      setPreviousTime(now);
      setElapsedTime(elapsedTime + (now - previousTime));
    }
  };
  const onStart = () => {
    setTimerRunning(true);
    setPreviousTime(Date.now());
  };
  const onReset = () => {
    setElapsedTime(0);
    setPreviousTime(Date.now());
  };
  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <div className="stopwatch-time">{seconds}</div>
      {timerRunning ? (
        <button onClick={onStop}>Stop</button>
      ) : (
        <button onClick={onStart}>Start</button>
      )}
      <button onClick={onReset}>Reset</button>
    </div>
  );
};
const AddPlayerForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(name);
    setName('');
  };
  return (
    <div className="add-player-form">
      <form onSubmit={onSubmit}>
        <input type="text" value={name} onChange={onNameChange} />
        <input type="submit" value="Add Player" />
      </form>
    </div>
  );
};
Stats.propTypes = {
  players: PropTypes.array.isRequired
};
function Header({ players, title }) {
  return (
    <div className="header">
      <Stats players={players} />
      <h1>{title}</h1>
      <Stopwatch />
    </div>
  );
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
  players: PropTypes.array.isRequired
};
function Counter({ onChange, score }) {
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => onChange(-1)}>
        {' '}
        -{' '}
      </button>
      <div className="counter-score">{score}</div>
      <button className="counter-action increment" onClick={() => onChange(1)}>
        {' '}
        +{' '}
      </button>
    </div>
  );
}
Counter.propTypes = {
  score: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};
function Player({ onRemove, name, score, onScoreChange }) {
  return (
    <div className="player">
      <div className="player-name">
        <a className="remove-player" onClick={onRemove}>
          ❌
        </a>
        {name}
      </div>
      <div className="player-score">
        <Counter score={score} onChange={onScoreChange} />
      </div>
    </div>
  );
}
Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onScoreChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};
const Application = (props) => {
  const [players, setPlayers] = useState([]);
  function onScoreChange(index, delta) {
    players[index].score += delta;
    setPlayers(players);
  }
  const onPlayerAdd = (name) => {
    players.push({
      name: name,
      score: 0,
      id: nextId
    });
    setPlayers(players);
    nextId++;
    console.log(players);
  };
  const onRemovePlayer = (index) => {
    players.splice(index, 1);
    setPlayers(players);
  };
  return (
    <div className="scoreboard">
      <Header title={props.title} players={players} />
      <div className="players">
        {players.map((player, index) => {
          return (
            <Player
              onScoreChange={(delta) => onScoreChange(index, delta)}
              name={player.name}
              score={player.score}
              onRemove={() => onRemovePlayer(index)}
              key={player.id}
            />
          );
        })}
      </div>
      <AddPlayerForm onAdd={onPlayerAdd} />
    </div>
  );
};
export default Application;
