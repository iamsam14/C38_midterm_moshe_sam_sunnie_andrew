import React, { useRef } from 'react';
export default function AmountOfQuestions({
  amount,
  setAmount,
  formGroupClass,
  setFormGroupClass
}) {
  const amountEl = useRef();

  return (
    <div className={formGroupClass ? 'none' : 'form-group'}>
      <label htmlFor="amount">
        Amount of questions
        <input
          type="number"
          id="amount"
          min="1"
          step="1"
          defaultValue={10}
          ref={amountEl}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </label>
    </div>
  );
}
