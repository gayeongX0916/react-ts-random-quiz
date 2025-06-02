import { useState } from "react";

type QuizSectionProps = {
  question: {
    category: string;
    question: string;
    incorrect_answers: string[];
    correct_answer: string;
  };
  current: number;
  total: number;
  onNext: () => void;
};

const decodeHtml = (html: string) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const QuizSection = ({
  question,
  current,
  total,
  onNext,
}: QuizSectionProps) => {
  if (!question) return <div>로딩 중...</div>;

  const answers = [...question.incorrect_answers, question.correct_answer];
  const shuffled = answers.sort(() => Math.random() - 0.5);

  return (
    <>
      <h4>
        문제 : {current}/{total}
      </h4>
      <h4>주제 : {question.category}</h4>
      <div className="quiz-question">{decodeHtml(question.question)}</div>
      <div className="quiz-button-container">
        {shuffled.map((answer, index) => (
          <button key={index}>{decodeHtml(answer)}</button>
        ))}
      </div>
      <button onClick={onNext}>다음</button>
    </>
  );
};

export default QuizSection;
