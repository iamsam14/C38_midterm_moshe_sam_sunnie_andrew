import React from 'react';
import Scoreboard from './components/Scoreboard';
import Timer from './components/Timer';
import AddPlayerForm from './components/AddPlayerForm';
import GetTriviaStuff from './components/GetTriviaStuff';
import './css/Scoreboard.css';

const App = () => {
  return (
    <div id="container">
      <Scoreboard />
      <GetTriviaStuff />
      <AddPlayerForm />
      <Timer />
    </div>
  );
};

export default App;
