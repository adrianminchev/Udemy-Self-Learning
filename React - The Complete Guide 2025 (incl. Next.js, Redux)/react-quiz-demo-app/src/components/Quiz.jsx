import { useState, useCallback } from "react";
import Question from "./Question";
import Summary from "./Summary";
import QUESTIONS_DATA from "../questions";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS_DATA.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
