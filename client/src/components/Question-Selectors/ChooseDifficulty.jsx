import React from 'react';

export default function ChooseDifficulty({ difficulty, setDifficulty }) {
  return (
    <div className="form-group">
      <label htmlFor="difficulty">
        Difficulty
        <select
          id="difficulty"
          onChange={(e) => {
            setDifficulty(e.target.value);
          }}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
    </div>
  );
}
