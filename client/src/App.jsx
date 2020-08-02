import React, { useState, useEffect, Component } from 'react';
// import { AppContextProvider } from './context/AppContext';
// import ContextDemo from './components/ContextDemo';
import './App.css';
import Flashcards from './components/Flashcards/Flashcards';

const App = () => {
  const [serverMessage, setServerMessage] = useState('');

  const fetchDemoData = () => {
    fetch('/api/demo')
      .then((response) => response.json())
      .then((data) => setServerMessage(data.message));
  };

  useEffect(fetchDemoData, []);

  return <Flashcards />;
};

export default App;
