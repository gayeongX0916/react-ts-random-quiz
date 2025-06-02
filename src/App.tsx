import { useEffect, useState } from "react";
import "./App.css";
import QuizScore from "./components/QuizScore";
import QuizSection from "./components/QuizSection";
import { fetchQuizData } from "./api/fetchQuiz";

function App() {
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuizData().then((quizData) => {
      setQuestions(quizData);
      setLoading(false);
    });
  }, []);

  return (
    <div className="random-quiz">
      <div className="quiz-title">
        <h1>랜덤퀴즈 앱</h1>
        <QuizScore/>
      </div>
      <section className="quiz-section">
        <QuizSection        />
      </section>
    </div>
  );
}

export default App;
