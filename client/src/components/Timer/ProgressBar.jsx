import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

// Handle questions and answers to stop reset timer.....
// onClick={() => handleNextCard(isCorrect)}
// onClick={() => handleRevealAnswer(answer)}

const ProgressBar = () => {
  const RenderTime = ({ remainingTime }) => {
    var currentTime = useRef(remainingTime);
    const prevTime = useRef(null);
    const isNewTimeFirstTick = useRef(false);
    const [, setOneLastRerender] = useState(0);

    if (currentTime.current !== remainingTime) {
      isNewTimeFirstTick.current = true;
      prevTime.current = currentTime.current;
      currentTime.current = remainingTime;
    } else {
      isNewTimeFirstTick.current = false;
    }

    // force one last re-render when the time is over to trigger the last animation
    if (remainingTime === 0) {
      setTimeout(() => {
        setOneLastRerender((val) => val + 1);
      }, 20);
    }

    const isTimeUp = isNewTimeFirstTick.current;

    return (
      <div className="time-wrapper">
        <div key={remainingTime} className={`time ${isTimeUp ? 'up' : ''}`}>
          {remainingTime}
        </div>
        {prevTime.current !== null && (
          <div
            key={prevTime.current}
            className={`time ${!isTimeUp ? 'down' : ''}`}
          >
            {prevTime.current}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="App">
      <h1>
        The time:
        <br />
      </h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={12}
          colors={[['#007AF3', 0.5], ['#00D324', 0.3], ['#BB1800']]}
        >
          {RenderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default ProgressBar;
