import React, { useState } from 'react';

function QuestionComponent(props) {
  const [answer, setAnswer] = useState(null);

  const handleAnswer = (value) => {
    setAnswer(value);
  };

  return (
    <div className='bg-blue-400 mt-4 px-8 mx-auto w-fit max-w-[90%] rounded-md text-black text-center'>
      <h2>{props.question}</h2>
      <button
        className='bg-white px-4 py-2 rounded-md mx-2'
        onClick={() => handleAnswer(0)}
      >
        Yes
      </button>
      <button
        className='bg-white px-4 py-2 rounded-md mx-2'
        onClick={() => handleAnswer(1)}
      >
        No
      </button>
      <button
        className='bg-white px-4 py-2 rounded-md mx-2'
        onClick={() => handleAnswer(0.5)}
      >
        Maybe
      </button>
      <p>Selected Value: {answer}</p>
    </div>
  );
}

export default QuestionComponent;
