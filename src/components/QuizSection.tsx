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
  onAnswer: (isCorrect: boolean) => void;
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
  onAnswer,
}: QuizSectionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showResult, setShowResult] = useState(false);

  if (!question) return <div>로딩 중...</div>;

  const answers = [...question.incorrect_answers, question.correct_answer];

  const handleSelect = (answer: string) => {
    if (!isAnswered) {
      setSelectedAnswer(answer);
    }
  };

  const handleCheck = () => {
    if (selectedAnswer !== null) {
      const isCorrect = selectedAnswer === question.correct_answer;
      setIsAnswered(true);
      setShowResult(true);
      onAnswer(isCorrect);
    }
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    setShowResult(false);
    onNext();
  };

  return (
    <>
      <h4>
        문제 : {current}/{total}
      </h4>
      <h4>주제 : {question.category}</h4>
      <div className="quiz-question">{decodeHtml(question.question)}</div>
      <div className="quiz-button-container">
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleSelect(answer)}
            className={selectedAnswer === answer ? "selected" : ""}
          >
            {decodeHtml(answer)}
          </button>
        ))}
      </div>
      <div className="quiz-result-container">
        {!isAnswered && (
          <button onClick={handleCheck} className="quiz-check">
            확인
          </button>
        )}
        {isAnswered && (
          <div className="quiz-result-message">
            {selectedAnswer === question.correct_answer
              ? "✅ 정답입니다!"
              : `❌ 틀렸습니다. 정답: ${decodeHtml(question.correct_answer)}`}
          </div>
        )}
        {showResult && (
          <button onClick={handleNext} className="quiz-next">
            다음
          </button>
        )}
      </div>
    </>
  );
};

export default QuizSection;
