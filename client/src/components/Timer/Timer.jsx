import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(20);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(20);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
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
        className={`first-button${isActive ? 'active' : 'inactive'}`}
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
