import React, { useState } from 'react';
import axios from 'axios';
import Flashcard from '../Flashcards/Flashcard';
import ChooseCategory from '../Question-Selectors/ChooseCategory';
import ChooseDifficulty from '../Question-Selectors/ChooseDifficulty';
import AmountOfQuestions from '../Question-Selectors/AmountOfQuestions';
import { useHistory } from 'react-router-dom';

const GetTriviaStuff = ({ remainingTime }) => {
  const [cardMap, setCardMap] = useState({});
  const [currentCard, setCurrentCard] = useState(null);
  const [amount, setAmount] = useState(10);
  const [difficulty, setDifficulty] = useState('easy');
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  let history = useHistory();

  const handleNextCard = (isCorrect) => {
    if (isCorrect) {
      setCorrectAnswerCount(correctAnswerCount + 1);
    }
    if (currentCard.next) {
      setCurrentCard(cardMap[currentCard.next]);
    } else {
      const getScore = (correctAnswerCount, difficulty) => {
        console.log('the diff is: ', difficulty);
        let diffCoefficient = 0.6;
        if (difficulty === 'hard') diffCoefficient = 2;
        if (difficulty === 'medium') diffCoefficient = 1.2;
        const score = Math.round(
          152.75 * diffCoefficient * correctAnswerCount * 40
        );
        console.log('the score is', score);
        return score;
      };
      history.push(`/scoreboard/${getScore(correctAnswerCount, difficulty)}`);
    }
  };

  const decodeString = (str) => {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value;
  };

  let isLastCard;
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

    setIsClicked(true);
  };

  return (
    <>
      {!isClicked ? (
        <div className="getridofme">
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
        </div>
      ) : null}

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
