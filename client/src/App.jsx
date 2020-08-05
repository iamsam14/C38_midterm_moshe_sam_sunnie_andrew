import React, { useState } from 'react';
import Scoreboard from './components/Scoreboard/Scoreboard';
import Timer from './components/Timer/Timer';
import AddPlayerForm from './components/Newplayer/AddPlayerForm';
import GetTriviaStuff from './components/GetTriviaStuff/GetTriviaStuff';
import LandingPage from './components/LandingPage/LandingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './components/Scoreboard/Scoreboard.css';

const App = () => {
  return (
    <div id="container">
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/select' component={GetTriviaStuff}/>
          <Route path='/scoreboard' component={Scoreboard} />
        </Switch>
      </Router>

      {/* <AddPlayerForm />

      <Timer /> */}
    </div>
  );
};

export default App;
