import React, { useState } from 'react';
import Newplayer from '../css/Newplayer.css';
const NewPlayer = ({ addPlayer }) => {
  const [name, setPlayer] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(name);
    setPlayer('');
  };
  return (
    <div id="newplayerform">
      <form onSubmit={handleSubmit}>
        <label>Player: </label>
        <input
          type="text"
          value={name}
          required
          onChange={(e) => setPlayer(e.target.value)}
        />
        <input type="submit" value="Add Player"></input>
      </form>
    </div>
  );
};

export default NewPlayer;
