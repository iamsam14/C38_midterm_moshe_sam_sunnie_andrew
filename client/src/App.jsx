import React from 'react';
import Scoreboard from './components/Scoreboard';
// import AddPlayerForm from './components/AddPlayerForm';

import './css/Scoreboard.css';
import Timer from './components/Timer';
import AddPlayerForm from './components/AddPlayerForm';
//import Timer from './components/CountdownTimer';

const App = () => {
  return (
    <div id="container">
      <Scoreboard />

      <AddPlayerForm />
      <Timer />
    </div>
  );
};

export default App;
