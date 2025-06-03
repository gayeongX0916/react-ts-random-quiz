import { useEffect, useState } from "react";
import "./App.css";
import QuizScore from "./components/QuizScore";
import QuizSection from "./components/QuizSection";
import { fetchQuizData } from "./api/fetchQuiz";

type Question = {
  category: string;
  question: string;
  incorrect_answers: string[];
  correct_answer: string;
};

function App() {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    fetchQuizData().then((quizData) => {
      setQuestions(quizData);
      setLoading(false);
    });
    if (!loading) {
      <div>로딩 중...</div>;
    }
  }, []);

  return (
    <div className="random-quiz">
      <div className="quiz-title">
        <h1>랜덤퀴즈 앱</h1>
        <QuizScore score={score} />
      </div>
      <section className="quiz-section">
        <QuizSection
          question={questions[currentQuestionIndex]}
          current={currentQuestionIndex + 1}
          total={questions.length}
          onNext={() => setCurrentQuestionIndex((prev) => prev + 1)}
          onAnswer={(isCorrect: boolean) => {
            if (isCorrect) {
              setScore((prev) => prev + 1);
            }
          }}
        />
      </section>
    </div>
  );
}

export default App;
