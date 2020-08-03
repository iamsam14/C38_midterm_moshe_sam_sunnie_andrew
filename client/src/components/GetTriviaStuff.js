import React, { useState } from 'react';
import FlashCardList from './FlashCardList';
import axios from 'axios';
import ChooseCategory from './ChooseCategory';
import ChooseDifficulty from './ChooseDifficulty';
import ChooseType from './ChooseType';
import AmountOfQuestions from './AmountOfQuestions';

const GetTriviaStuff = () => {
    const [flashcards, setFlashcards] = useState([])
    const [amount, setAmount] = useState(10)
    const [difficulty, setDifficulty] = useState('')
    const [type, setType] = useState('')
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('')
    const [rightAnswer, setRightAnswer] = useState('')
    const [triviaQuestion, settriviaQuestion] = useState('')
    const [loading, setloading] = useState(false)
    const [currentQuestion, setcurrentQuestion] = useState(1)
    const [questionsPerPage, setquestionsPerPage] = useState(1)

     function decodeString(str) {
       const textArea = document.createElement('textarea');
       textArea.innerHTML = str;
       return textArea.value;
     }

     //
     function handleSubmit(event) {
        event.preventDefault();
        setloading(true)
        axios
        .get(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`)
        .then(res => {
          setRightAnswer(res.data.results.correct_answer)

         setFlashcards(res.data.results.map((questionItem, index) => {
           const answer = decodeString(questionItem.correct_answer)
           const options = [
             ...questionItem.incorrect_answers.map(a => decodeString(a)), 
             answer
           ]
           
           return {
             id: `${index}-${Date.now()}`,
             question: decodeString(questionItem.question),
             answer: answer, 
             options: options.sort(() => Math.random() - .5)
           }
         }))
       })
      }

      return (
        <>
        <form className='header' onSubmit={handleSubmit}>
       <ChooseCategory categories={categories} setCategories={setCategories} category={category} setCategory={setCategory}/>
       <ChooseDifficulty difficulty={difficulty} setDifficulty={setDifficulty}/>
       <ChooseType type={type} setType={setType}/>
       <AmountOfQuestions amount={amount} setAmount={setAmount}/>
       <button className='gamebutton'>Start Game!</button>
       </form>
          <div className='container'>
            <FlashCardList flashcards={flashcards}/>
          </div>
        </>
      );
    };
    


export default GetTriviaStuff;