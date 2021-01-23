import React, { useRef, useEffect } from 'react';

const RenderTime = ({ remainingTime, setCallback }) => {
  let currentTime = useRef(remainingTime);
  const prevTime = useRef(null);
  const isNewTimeFirstTick = useRef(false);

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  useEffect(() => {
    setCallback(() => remainingTime);
  }, []);

  const isTimeUp = isNewTimeFirstTick.current;
  return (
    <div className="time-wrapper">
      <div key={remainingTime} className={`time ${isTimeUp ? 'up' : ''}`}></div>
    </div>
  );
};
export default RenderTime;
