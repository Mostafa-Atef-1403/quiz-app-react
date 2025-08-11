const Results = ({ setcontent, userAnswers, questions }) => {
  let correctCount = 0;
  for (let i = 0; i < userAnswers.length; i++) {
    if (userAnswers[i] === questions[i].correct) {
      correctCount++;
    }
  }

  const totalQuestions = questions.length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  const getResultMessage = () => {
    if (percentage >= 80) return "Excellent!";
    if (percentage >= 60) return "Good Job!";
    if (percentage >= 40) return "Not Bad!";
    return "Keep Practicing!";
  };

  return (
    <div className="results-page">
      <h1 className="state">{getResultMessage()}</h1>
      <p className="result">
        Final score{" "}
        <span>
          {correctCount}/{totalQuestions}
        </span>
      </p>
      <p className="percentage">({percentage}% correct)</p>
      <button className="again" onClick={() => setcontent("playing")}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Results;
