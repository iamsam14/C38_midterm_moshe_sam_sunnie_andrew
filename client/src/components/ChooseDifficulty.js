import React from 'react'

export const ChooseDifficulty = () => {
    return (
                <div className='form-group'>
                    <label htmlFor='difficulty'>Difficulty
                        <select id='difficulty'>
                            <option value=''>Any difficulty</option>
                            <option value='easy'>Easy</option>
                            <option value='medium'>Medium</option>
                            <option value='hard'>Hard</option>
                        </select>
                    </label>
                </div>
    )
}
