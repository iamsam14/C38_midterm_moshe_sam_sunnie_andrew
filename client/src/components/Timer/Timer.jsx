import React, { useState, useEffect } from 'react';
import './TimerDisplay.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div id="timerwrap">
      <div className="time">{seconds}</div>
      <button
        className={`button-primary-${isActive ? 'active' : 'inactive'}`}
        onClick={toggle}
      >
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button className="button" onClick={reset}>
        Go Back
      </button>
    </div>
  );
};

export default Timer;

// const Timer = () => {
//   const [seconds, setSeconds] = useState(0);
//   const [whenPlaying, showSeconds] = useState(true);
//   Seconds increments....
//     useEffect(() => {
//       setInterval(() => {
//         setSeconds((seconds) => seconds + 1);
//       }, 1000);
//     }, []);
