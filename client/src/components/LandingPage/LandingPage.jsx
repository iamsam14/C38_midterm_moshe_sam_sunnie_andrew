import React from 'react';
//import 'animate.css';
import './landingPage.css';
import backgroundImg from './InfinitySymbol.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { useWindupString } from 'windups';
const LandingPage = () => {
  AOS.init();
  const [instructions] = useWindupString(
    "We all love a good game of trivia so here at Wyncode we've decided to make exactly that using our trivia API. Representing group 7 are Sunnie, Moshe, Andrew, and Sam "
  );

  const [playgame] = useWindupString(
    'Click the button below to set up your game'
  );
  return (
    <div
      id="landingPage"
      style={{
        backgroundImage: `url(${backgroundImg})`
      }}
    >
      <div id="landingPage-title">
        <h1
          data-aos="fade-right"
          data-aos-duration="3000"
          // className="animate__animated  animate__lightSpeedInLeft"
        >
          Infinite Fortress
        </h1>
        <h1
          // className="animate__ animated animate__lightSpeedInRight"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          Trivia
        </h1>
      </div>
      <p style={{ color: 'white' }}>{instructions}</p>
      <h4 style={{ color: 'white', marginBottom: '2rem' }}>{playgame}</h4>
      <Link to="/select">
        <button>Let's setup your game!</button>
      </Link>
    </div>
  );
};

// const backgroundPic = () => {
//   return <div style={{ backgroundImage: `url(${})` }} />;
// };

export default LandingPage;
