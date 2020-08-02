import React, { useState } from 'react'

export default function FlashCard({flashcard}) {
    const [flip, setFlip] = useState(false);
    // const [height, setHeight] = useState('initial')

    // const frontEl = useRef()
    // const backEl = useRef()

    // function setMaxHeight() {
    //     const frontHeight = frontEl.current.getBoundingClientRect().height
    //     const backHeight = backEl.current.getBoundingClientRect().height
    //     setHeight(Math.max(frontHeight, backHeight, 100))
    // }

    // useEffect(
    //     setMaxHeight, 
    //     [flashcard.question, flashcard.answer, flashcard.options]
    //     )
    // useEffect(() => {
    //     window.addEventListener('resize', setMaxHeight)
    // return () => window.removeEventListener('resize', setMaxHeight)
    // }, [])

    return (
        <div
        className={`card ${flip ? 'flip' : ''}`} 
        onClick={() => setFlip(!flip)}>
                {/* vvv add ref={frontEl} to div */}
            <div className='front' >
                {flashcard.question}
            <div className='flashcard-options'>
               {flashcard.options.map(option => {
                   return   <button 
                            className='flashcard-option' 
                            key={option}
                            onClick={() => setFlip(!flip) }>
                                {option}
                            </button>
               })}
            </div>
        </div>
        {/* add ref={backEl} to div  vvv */}
        <div className='backcardCSS' >{flashcard.answer}</div>
        </div>
    )
}
