import React from 'react'
import Flashcard from './FlashCard'

export default function FlashCardList({ flashcards }) {
    return (
        <div>
            {flashcards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard.id} />
            })}
        </div>
    )
}
