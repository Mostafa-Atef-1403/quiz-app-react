import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Results from "./components/Results";

import './styles/Start.css'
import './styles/Quiz.css'
import './styles/Results.css'

import { useState, useEffect } from "react";


function App() {
  const [content, setContent] = useState("start") // ==> will see if it's "start" || "playing" || "results"

  const [userAnswers, setUserAnswers] = useState([]) // ==> to store what user answers

    const questions = [
    {
      question: "What does useState hook do in React?",
      options: [
        "Sets the initial state of a class component",
        "Handles sindexe effects",
        "Manages state in functional components",
        "Updates the DOM directly",
      ],
      correct: 2,
    },
    {
      question: "Which of the following is used to render a React component?",
      options: [
        "render() method",
        "ReactDOM.render()",
        "createElement() function",
        "useEffect() hook",
      ],
      correct: 1,
    },
    {
      question: "What is the purpose of the useEffect hook in React?",
      options: [
        "To create components",
        "To manage state",
        "To render UI",
        "To handle sindexe effects in functional components",
      ],
      correct: 3,
    },
    {
      question: "What is a controlled component in React?",
      options: [
        "A component that manages its props",
        "A component that controls its own state",
        "A component that does not manage its state",
        "A component that does not re-render",
      ],
      correct: 1,
    },
    {
      question:
        "Which method is used to update state in React class components?",
      options: ["updateState()", "useState()", "useEffect()", "setState()"],
      correct: 3,
    },
    {
      question: "What is JSX in React?",
      options: [
        "A JSON file format for React",
        "A method for updating state",
        "A JavaScript syntax extension for writing HTML-like code",
        "A function for styling components",
      ],
      correct: 2,
    },
    {
      question:
        "Which hook would you use to access context values in a functional component?",
      options: ["useContext()", "useMemo()", "useEffect()", "useReducer()"],
      correct: 0,
    },
    {
      question: "What is the purpose of key prop in lists?",
      options: [
        "To set default values for list items",
        "To style the list items",
        "To bind event handlers",
        "To uniquely indexentify list items for efficient rendering",
      ],
      correct: 3,
    },
    {
      question: "What does the useReducer hook do?",
      options: [
        "Optimizes rendering performance",
        "Manages complex state logic using a reducer function",
        "Handles component sindexe effects",
        "Creates a reusable component",
      ],
      correct: 1,
    },
    {
      question:
        "Which hook is used for performance optimization by memoizing values?",
      options: ["useCallback()", "useMemo()", "useRef()", "useEffect()"],
      correct: 1,
    },
  ];

  useEffect(() => {
    if (content === "playing") {
      setUserAnswers([]);
    }
  }, [content]);


  return (
    <main>
      {content === "start" && <Start setcontent={setContent} />}
      {content === "playing" && <Quiz questions={questions} setcontent={setContent} userAnswers={userAnswers} setUserAnswers={setUserAnswers} />}
      {content === "results" && <Results questions={questions} setcontent={setContent} userAnswers={userAnswers} />}
    </main>
  );
}

export default App;
