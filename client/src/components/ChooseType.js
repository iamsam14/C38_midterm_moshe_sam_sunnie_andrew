import React, {useRef} from 'react'

export const ChooseType = () => {
    
    const typeEl = useRef()
    
    return (
                <div className='form-group'>
                    <label htmlFor='type'>Type of questions
                        <select id='type' ref={typeEl}>
                            <option value=''>Any</option>
                            <option value='boolean'>True or false</option>
                            <option value='multiple'>Multiple choice</option>
                        </select>
                    </label>
                </div>
    )
}
