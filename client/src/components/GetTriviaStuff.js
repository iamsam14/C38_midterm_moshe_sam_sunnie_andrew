import React, { useState, useEffect } from 'react';
import FlashCardList from './FlashCardList';
import axios from 'axios';
import ChooseCategory from './ChooseCategory';
import { ChooseDifficulty } from './ChooseDifficulty';
import {ChooseType} from './ChooseType';
import {AmountOfQuestions} from './AmountOfQuestions';

const GetTriviaStuff = () => {
    const [flashcards, setFlashcards] = useState([])
        
    //gets trivia & maps questions and answers
     useEffect(() => {
       axios
       .get('https://opentdb.com/api.php?amount=10&category=&difficulty=&type=&encode=')
       .then(res => {
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
     }, [])

    //fixes text
     function decodeString(str) {
       const textArea = document.createElement('textarea');
       textArea.innerHTML = str;
       return textArea.value;
     }

     //
     function handleSubmit(event) {
        event.preventDefault();
      }
    
      return (
        <>
        <form className='header' onSubmit={handleSubmit}>
       <ChooseCategory/>
       <ChooseDifficulty/>
       <ChooseType/>
       {/* <AmountOfQuestions/> */}
       <button className='gamebutton'>Start Game!</button>
       </form>
          <div className='container'>
            <FlashCardList flashcards={flashcards}/>
          </div>
        </>
      );
    };
    


export default GetTriviaStuff;