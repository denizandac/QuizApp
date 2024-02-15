import { useState, useCallback } from "react";
import summaryLogo from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

const DUMMY_QUESTIONS = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", isCorrect: true },
      { text: "London", isCorrect: false },
      { text: "Berlin", isCorrect: false },
      { text: "Madrid", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of Germany?",
    answers: [
      { text: "Paris", isCorrect: false },
      { text: "London", isCorrect: false },
      { text: "Berlin", isCorrect: true },
      { text: "Madrid", isCorrect: false },
    ],
  },
  {
    question: "What is the capital of Spain?",
    answers: [
      { text: "Paris", isCorrect: false },
      { text: "London", isCorrect: false },
      { text: "Berlin", isCorrect: false },
      { text: "Madrid", isCorrect: true },
    ],
  },
  {
    question: "What is the capital of England?",
    answers: [
      { text: "Paris", isCorrect: false },
      { text: "London", isCorrect: true },
      { text: "Berlin", isCorrect: false },
      { text: "Madrid", isCorrect: false },
    ],
  },
];

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  const isQuizFinished = userAnswers.length === DUMMY_QUESTIONS.length;
  if (isQuizFinished) {
    return (
      <div id="summary">
        <img src={summaryLogo} alt="Quiz complete" />
        <h2>Quiz finished</h2>
      </div>
    );
  }

  const shuffledAnswers = DUMMY_QUESTIONS[activeQuestionIndex].answers;
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          totalTime={10000}
          onTimeOut={handleSkipAnswer}
        />
        <h2>{DUMMY_QUESTIONS[activeQuestionIndex]?.question}</h2>
        <ul id="answers">
          {shuffledAnswers &&
            shuffledAnswers.map((answer, index) => (
              <li key={index} className="answer">
                <button onClick={() => handleSelectAnswer(answer.text)}>
                  {answer.text}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
