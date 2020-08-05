import React, { useState } from 'react';
import Scoreboard from './components/Scoreboard/Scoreboard';
import Timer from './components/Timer/Timer';
import AddPlayerForm from './components/NewPlayer/AddPlayerForm';
import GetTriviaStuff from './components/GetTriviaStuff/GetTriviaStuff';
import Flashcardlist from './components/Flashcards/FlashcardList';
import LandingPage from './components/LandingPage/LandingPage';
import './components/Scoreboard/Scoreboard.css';

const App = () => {
  return (
    <div id="container">
      <LandingPage />
      <Scoreboard />
      <GetTriviaStuff />
      <AddPlayerForm />

      <Timer />
    </div>
  );
};

export default App;
