import { useState } from "react";

const Quiz = ({ setcontent, userAnswers, setUserAnswers, questions }) => {
  const [question, setQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const checkAnswer = (selectedIndex) => {
    if (hasAnswered) return; // Prevent changing answer

    setSelectedOption(selectedIndex);
    setHasAnswered(true);

    const answers = [...userAnswers];
    answers[question] = selectedIndex;
    setUserAnswers(answers);
  };

  const getOptionClass = (index) => {
    if (!hasAnswered) return "";

    const isCorrect = index === questions[question].correct;
    const isSelected = index === selectedOption;

    if (isSelected && isCorrect) return "selected correct";
    if (isSelected && !isCorrect) return "selected wrong";
    if (isCorrect) return "correct";
    if (hasAnswered) return "disabled";

    return "";
  };

  return (
    <div className="quiz-page">
      <h1>
        Question {question + 1} of {questions.length}
      </h1>

      <div className="quiz-container">
        <h2>{questions[question].question}</h2>
        <ul className="options">
          {questions[question].options.map((option, index) => (
            <li
              key={index}
              className={getOptionClass(index)}
              onClick={() => checkAnswer(index)}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>

      <div className="action-btns">
        <button className="finish-btn" onClick={() => setcontent("results")}>
          Finish
        </button>

        <button
          className="next-btn"
          onClick={() => {
            if (question === questions.length - 1) {
              setcontent("results");
            } else {
              setQuestion((q) => q + 1);
              setHasAnswered(false);
              setSelectedOption(null);
            }
          }}
          disabled={!hasAnswered}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;

/*

 */
