import React, { useState } from 'react';
import NewPlayer from './NewPlayer';
//import uuid from 'uuid';

// Function - Add player Name to list. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const AddPlayerForm = () => {
  const [players, setPlayers] = useState([]);

  // Assign each name a unique key. ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const addPlayer = (name) => {
    setPlayers([...players, { name, id: 0 }]);
  };

  return (
    <div>
      <div id="players">
        {players.map((user) => {
          return (
            <div id="user" key={user.id}>
              {user.name}
            </div>
          );
        })}
      </div>
      <NewPlayer addPlayer={addPlayer} />
    </div>
  );
};

export default AddPlayerForm;

// handleChange = (e) => {
//   this.setState({
//     [e.target.id]: e.target.value
//   });
// };

// handleSubmit = (e) => {
//   e.preventDefault();
// };
