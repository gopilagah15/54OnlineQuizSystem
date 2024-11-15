import React, { useState } from "react";

const QuizPlayer = ({ questions, addScore }) => {
  const [userAnswers, setUserAnswers] = useState({});
  const [completed, setCompleted] = useState(false);

  const handleAnswerChange = (index, answer) => {
    setUserAnswers({ ...userAnswers, [index]: answer });
  };

  const handleSubmitQuiz = () => {
    let correctCount = 0;
    questions.forEach((q, index) => {
      if (q.correctAnswer === userAnswers[index]) {
        correctCount++;
      }
    });
    const score = (correctCount / questions.length) * 100;
    addScore({ score, completed: true });
    setCompleted(true);
  };

  return (
    <div>
      <h2>Take the Quiz</h2>
      {questions.length > 0 ? (
        <div>
          {questions.map((q, index) => (
            <div key={index}>
              <p>{q.question}</p>
              {q.choices.map((choice, i) => (
                <label key={i}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={choice}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                  />
                  {choice}
                </label>
              ))}
            </div>
          ))}
          {!completed && (
            <button onClick={handleSubmitQuiz}>Submit Quiz</button>
          )}
          {completed && <p>Quiz submitted! Check your score in the report.</p>}
        </div>
      ) : (
        <p>No questions available. Please create a quiz first.</p>
      )}
    </div>
  );
};

export default QuizPlayer;
