import React from 'react';

const PLAYERS = [
  {
    name: 'Andrew',
    score: 22,
    id: 1
  },
  {
    name: 'Moshe',
    score: 31,
    id: 2
  },
  {
    name: 'Sam',
    score: 2,
    id: 3
  },
  {
    name: 'Sunnie',
    score: 17,
    id: 4
  },
  {
    name: 'Ernie',
    score: 10,
    id: 5
  }
];

let nextId = 6;

// add new player
const AddPlayerForm = () => {};
//
const firstState = () => {
  return {
    name: ''
  };
};

// event name value for input
const onNameChange = (e) => {
  this.setState({ name: e.target.value });
};

//click for add player
let onSubmit = (e) => {
  e.preventDefault();
  // onAdd(this.state.name);
  // setState({ name: '' });
};
//renders the above
const BuildUserForm = () => {
  return (
    <div className="additional-player">
      <form onSubmit={onSubmit}>
        <input type="text" value={this.state.name} onChange={this.nameChange} />
        <input type="submit" value="Add player" />
      </form>
    </div>
  );
};
//Top div
const boardTitle = () => {
  return (
    <div className="board-title">
      <h1>Trivia Jedi-Master Ranking:</h1>
    </div>
  );
};

const Player = ({ props }) => {
  return (
    <div className="player">
      <div className="player-name">
        <a className="remove-user" onClick={props.onRemove}>
          ✖
        </a>
        {props.name}
      </div>
    </div>
  );
};

// for function using the score
// <div className="counter-score"> {props.score} </div>
//

//calling function
firstState();

//switching back and forth
// let Player = {
//   name: '',
//   score: '',
//   onScoreChange: ''
// };
//player score increase. they move to higher order.
const onScoreChange = (index, scores) => {
  let players = [...this.state.players];
  players[index].score += scores;
  players = players.sort((a, b) => b.score - a.score);
  this.setState({ players });
};

const onAddPlayer = (name) => {
  this.state.players.push({
    name: name,
    score: 0,
    id: nextId
  });
  this.setState(this.state);
  nextId += 1;
};

let onRemovePlayer = (index) => {
  this.state.players.splice(index, 1);
  this.setState(this.state);
};

//reorder render
// const TopFive = () => {
//   return (
//     <div className="scoreboard">
//       <boardTitle title={this.props.title} players={this.state.players} />

//       <div className="players">
//         {this.state.players.map(
//           function (player, index) {
//             return (
//               <Player
//                 onScoreChange={function (delta) {
//                   this.onScoreChange(index, delta);
//                 }.bind(this)}
//                 onRemove={function () {
//                   this.onRemovePlayer(index);
//                 }.bind(this)}
//                 name={player.name}
//                 score={player.score}
//                 key={player.id}
//               />
//             );
//           }.bind(this)
//         )}
//       </div>
//       <AddPlayerForm onAdd={this.onPlayerAdd} />
//     </div>
//   );
// };
export default TopFive;
