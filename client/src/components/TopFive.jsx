import React from 'react';

let id = 1;
const players = [];

const handleSubmit = (e) => {
  e.preventDefault();
};

const player = {
  name: '',
  id: id,
  score: 0
};

id += 1;
players.push(player);

const TopFive = () => {
  return (
    <div id="top-five">
      <div className="wrap">
        <div className="eachPlayerBlock">First Place:{}</div>
        <div className="eachPlayerBlock">Second Place:{}</div>
        <div className="eachPlayerBlock">Third Place:{}</div>
        <div className="eachPlayerBlock">Fourth Place:{}</div>
        <div className="eachPlayerBlock">Fifth Place:{}</div>
      </div>
    </div>
  );
};

export default TopFive;
