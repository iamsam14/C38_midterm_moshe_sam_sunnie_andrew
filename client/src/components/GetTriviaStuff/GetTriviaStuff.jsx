import React, { useState, useEffect } from 'react';
import FlashcardList from '../Flashcards/FlashcardList';
import axios from 'axios';
import ChooseCategory from '../Question-Selectors/ChooseCategory';
import ChooseDifficulty from './../Question-Selectors/ChooseDifficulty';
import ChooseType from '../Question-Selectors/ChooseType';
import AmountOfQuestions from '../Question-Selectors/AmountOfQuestions';

const GetTriviaStuff = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [amount, setAmount] = useState(10);
  const [difficulty, setDifficulty] = useState('');
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState('');
  const [rightAnswer, setRightAnswer] = useState('');
  const [triviaQuestion, settriviaQuestion] = useState('');
  const [loading, setloading] = useState(false);
  const [currentQuestion, setcurrentQuestion] = useState(1);
  const [questionsPerPage, setquestionsPerPage] = useState(1);

  //gets trivia & maps questions and answers
  useEffect(() => {}, []);

  /**
   * FIXES STRING FORMATTING
   */
  function decodeString(str) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value;
  }

  //
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get(
        `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
      )
      .then((res) => {
        console.log(res);

        setFlashcards(
          res.data.results.map((questionItem, index) => {
            const answer = decodeString(questionItem.correct_answer);
            const options = [
              ...questionItem.incorrect_answers.map((a) => decodeString(a)),
              answer
            ];

            return {
              id: `${index}-${Date.now()}`,
              question: decodeString(questionItem.question),
              answer: answer,
              options: options.sort(() => Math.random() - 0.5)
            };
          })
        );
      });
  }

  return (
    <>
      <form className="header" onSubmit={handleSubmit}>
        <ChooseCategory
          categories={categories}
          setCategories={setCategories}
          category={category}
          setCategory={setCategory}
        />
        <ChooseDifficulty
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
        <AmountOfQuestions amount={amount} setAmount={setAmount} />
        <button className="gamebutton">Start Game!</button>
      </form>
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
    </>
  );
};

export default GetTriviaStuff;
