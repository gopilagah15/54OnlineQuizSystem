import React from "react";

const QuizReport = ({ scores, questions }) => {
  const totalQuizzes = scores.length;
  const averageScore =
    scores.reduce((sum, { score }) => sum + score, 0) / (totalQuizzes || 1);

  const passRate =
    (scores.filter(({ score }) => score >= 50).length / (totalQuizzes || 1)) *
    100;

  return (
    <div>
      <h2>Quiz Report</h2>
      <p>Total Quizzes Taken: {totalQuizzes}</p>
      <p>Average Score: {averageScore.toFixed(2)}%</p>
      <p>Pass Rate: {passRate.toFixed(2)}%</p>
    </div>
  );
};

export default QuizReport;
