import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import RenderTime from './RenderTime';

const ProgressBar = ({ setCallback }) => {
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
          <RenderTime setCallback={setCallback} />
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default ProgressBar;
