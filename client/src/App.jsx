import React from 'react';
import Scoreboard from './components/Scoreboard/Scoreboard';
import GetTrivia from './components/GetTrivia/GetTrivia';
import LandingPage from './components/LandingPage/LandingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './components/Scoreboard/Scoreboard.css';

const App = () => {
  return (
    <div id="container">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/select" component={GetTrivia} />
          <Route path="/scoreboard/:score" component={Scoreboard} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
