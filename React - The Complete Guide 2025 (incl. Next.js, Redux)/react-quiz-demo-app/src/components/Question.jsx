import { useState } from "react";
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import QUESTIONS_DATA from "../questions.js";

const SELECTED_ANSWER_TIMER = 1000;
const CORRECT_ANSWER_TIMER = 2000;

export default function Question({
  questionIndex,
  onSelectAnswer,
  onSkipAnswer,
}) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });
  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = SELECTED_ANSWER_TIMER;
  }

  if (answer.isCorrect !== null) {
    timer = CORRECT_ANSWER_TIMER;
  }

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS_DATA[questionIndex].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAnswer(answer);
      }, CORRECT_ANSWER_TIMER);
    }, SELECTED_ANSWER_TIMER);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
        timeout={timer}
        mode={answerState}
      />
      <h2>{QUESTIONS_DATA[questionIndex].text}</h2>
      <Answers
        answers={QUESTIONS_DATA[questionIndex].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
