import React, { useState } from "react";

const QuizCreator = ({ addQuestion }) => {
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  const handleAddQuestion = (e) => {
    e.preventDefault();
    if (question && correctAnswer && choices.every((choice) => choice)) {
      addQuestion({ question, choices, correctAnswer });
      setQuestion("");
      setChoices(["", "", "", ""]);
      setCorrectAnswer("");
    }
  };

  const handleChoiceChange = (index, value) => {
    const updatedChoices = [...choices];
    updatedChoices[index] = value;
    setChoices(updatedChoices);
  };

  return (
    <div>
      <h2>Create a Quiz Question</h2>
      <form onSubmit={handleAddQuestion}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter the question"
        />
        {choices.map((choice, index) => (
          <input
            key={index}
            type="text"
            value={choice}
            onChange={(e) => handleChoiceChange(index, e.target.value)}
            placeholder={`Choice ${index + 1}`}
          />
        ))}
        <select
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
        >
          <option value="">Select Correct Answer</option>
          {choices.map((choice, index) => (
            <option key={index} value={choice}>
              {choice}
            </option>
          ))}
        </select>
        <button type="submit">Add Question</button>
      </form>
    </div>
  );
};

export default QuizCreator;
