import React from 'react';
import { Link } from 'react-router-dom';
import './ribbon.png';

const LandingPage = () => {
  return (
    <>
      <h1 className="animate__animated animate__bounce">
        Infinite Fortress Trivia
      </h1>
      <div>
        <Link to="/select">
          <button>Let's setup your game!</button>
        </Link>
      </div>
    </>
  );
};
export default LandingPage;
