import React, { useState } from 'react';
import axios from 'axios';
import Flashcard from '../Flashcards/Flashcard';
import ChooseCategory from '../Question-Selectors/ChooseCategory';
import ChooseDifficulty from './../Question-Selectors/ChooseDifficulty';
import AmountOfQuestions from '../Question-Selectors/AmountOfQuestions';
import {useHistory} from 'react-router-dom'

const GetTriviaStuff = () => {
  const [cardMap, setCardMap] = useState({});
  const [currentCard, setCurrentCard] = useState(null);
  const [amount, setAmount] = useState(10);
  const [difficulty, setDifficulty] = useState('');
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  let history = useHistory();

  // if you want to know how many are wrong
  // const wrongAnswers = Object.keys(cardMap).length - correctAnswerCount;

  const handleNextCard = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswerCount(correctAnswerCount + 1);
    }
    if (currentCard.next) {
      setCurrentCard(cardMap[currentCard.next]);
    } else {
      history.push('/scoreboard')
      // do something for the final card
      // maybe re-direct to some other page
    }
  };

  /**
   * FIXES STRING FORMATTING
   */
  const decodeString = (str) => {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value;
  };
let isLastCard;
  //gets trivia & maps questions and answers
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
      )
      .then((res) => {
        const cards = res.data.results.map((questionItem, index) => {
          const answer = decodeString(questionItem.correct_answer);
          const options = [
            ...questionItem.incorrect_answers.map((a) => decodeString(a)),
            answer
          ];

          const id = `${index}-${Date.now()}`;

          return {
            id,
            question: decodeString(questionItem.question),
            answer: answer,
            options: options.sort(() => Math.random() - 0.5)
          };
        });

        const parsedCards = cards.reduce((acc, card, index) => {
          isLastCard = index === cards.length - 1;
          const next = isLastCard ? null : cards[index + 1].id;
          acc[card.id] = {
            ...card,
            next
          };
          return acc;
        }, {});

        const firstCard = cards[0];

        setCurrentCard(parsedCards[firstCard.id]);
        setCardMap(parsedCards);
      });
      
      setIsClicked(true)
  };

  return (
    <>
    {!isClicked ? <div className='getridofme'>
      <form className="header" onSubmit={handleSubmit}>
        <ChooseCategory
          categories={categories}
          setCategories={setCategories}
          setCategory={setCategory}
        />
        <ChooseDifficulty
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
        <AmountOfQuestions amount={amount} setAmount={setAmount} />
        <button className="gamebutton">Start Game!</button>
      </form>
      </div> : null}
    

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
  );
};

export default GetTriviaStuff;
