import React, { useRef } from 'react'
//I dont work
export const AmountOfQuestions = () => {

    const amountEl = useRef

    return (
        <div className='form-group'>
            <label htmlFor='amount'>Amount of questions
                <input type='number' id='amount' min='1' 
                step='1' defaultValue={10} ref={amountEl}/>
            </label>
        </div>
    )
}
