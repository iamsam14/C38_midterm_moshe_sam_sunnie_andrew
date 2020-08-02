import React from 'react';
import Scoreboard from './components/Scoreboard';
// import AddPlayerForm from './components/AddPlayerForm';

import './css/Scoreboard.css';
import AddPlayerForm from './components/AddPlayerForm';
//import Timer from './components/CountdownTimer';
import TopFive from './components/TopFive';

const App = () => {
  return (
    <div id="container">
      <Scoreboard />

      <AddPlayerForm />
    </div>
  );
};

export default App;
