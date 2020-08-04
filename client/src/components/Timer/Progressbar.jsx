import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import 'react-countdown-circle-timer';

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Time is up! </div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

function ItsATimer() {
  return (
    <div className="App">
      <h1>
        Trivia Time:
        <br />
      </h1>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={20}
          colors={[['#088300', 0.66], ['#FFFB14', 0.33], ['#A30000']]}
          onComplete={() => [true, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <p className="info" />
    </div>
  );
}
export default CircleTimer;
