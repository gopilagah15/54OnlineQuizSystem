import React, { useState } from "react"; 
import QuizCreator from "./QuizCreator";
import QuizPlayer from "./QuizPlayer";
import QuizReport from "./QuizReport ";

const OnlineQuizSystem = () => {
  const [questions, setQuestions] = useState([]);
  const [scores, setScores] = useState([]);

  const addQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  const addScore = (userScore) => {
    setScores([...scores, userScore]);
  };

  return (
    <div>
      <h1>Online Quiz System</h1>
      <QuizCreator addQuestion={addQuestion} />
      <QuizPlayer questions={questions} addScore={addScore} />
      <QuizReport scores={scores} questions={questions} />
    </div>
  );
};

export default OnlineQuizSystem;
