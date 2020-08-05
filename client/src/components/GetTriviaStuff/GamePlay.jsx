import React from 'react'
import GetTriviaStuff from './GetTriviaStuff'
import Flashcard from '../Flashcards/Flashcard'

export const GamePlay = ({currentCard}) => {
  <GetTriviaStuff />  
  
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);


    const handleNextCard = (isCorrect) => {
        if (isCorrect) {
          setCorrectAnswerCount(correctAnswerCount + 1);
        }
        if (currentCard.next) {
          setCurrentCard(cardMap[currentCard.next]);
        } else {
          console.log('i am at the last question do something to me');
          // do something for the final card
          // maybe re-direct to some other page
        }
      };

    return (
        <>
            <div className="container">
        <div className="card-stack">
          {currentCard && (
            <Flashcard
              key={currentCard.id}
              flashcard={currentCard}
              handleNextCard={handleNextCard}
            />
          )}
        </div>
      </div>
        </>
    )
}
