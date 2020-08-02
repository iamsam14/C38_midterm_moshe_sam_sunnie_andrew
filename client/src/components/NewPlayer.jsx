import React, { useState } from 'react';

const NewPlayer = ({ addPlayer }) => {
  const [name, setPlayer] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(name);
    setPlayer('');
  };
  return (
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
  );
};

export default NewPlayer;
