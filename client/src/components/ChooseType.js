import React, {useRef} from 'react'

export default function ChooseType ({type, setType}) {
    
    const typeEl = useRef()
    
    return (
                <div className='form-group'>
                    <label htmlFor='type'>Type of questions
                        <select id='type' ref={typeEl} onChange={(e) => {setType(e.target.value)}}>
                            <option value=''>Any</option>
                            <option value='boolean'>True or false</option>
                            <option value='multiple'>Multiple choice</option>
                        </select>
                    </label>
                </div>
    )
}
