const Start = ({ setcontent }) => {
  return (
    <div className="start-page">
      <h1>Coding Quiz Challenge </h1>
      <p>Test Your Knowlage!</p>
      <button
        className="start-quiz"
        onClick={() => {
          setcontent("playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Start;
