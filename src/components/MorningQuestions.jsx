import React from 'react';
import QuestionComponent from './Questions';
const MorningQuestions = () => {
  const questions = [
    'Did you wake up feeling refreshed and well-rested?',
    'Are you looking forward to the day ahead?',
    'Do you feel mentally prepared to handle challenges today?',
    'Have you managed to resolve any stress from yesterday?',
    'Do you feel confident in managing your tasks and responsibilities today?',
  ];
  return (
    <>
      {questions.map((item, index) => (
        <QuestionComponent key={index} question={item} />
      ))}
    </>
  );
};
export default MorningQuestions;
