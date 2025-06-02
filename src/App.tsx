import { useEffect, useState } from "react";
import "./App.css";
import QuizScore from "./components/QuizScore";
import QuizSection from "./components/QuizSection";
import { fetchQuizData } from "./api/fetchQuiz";

function App() {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
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
  console.log(questions);

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
        />
      </section>
    </div>
  );
}

export default App;
