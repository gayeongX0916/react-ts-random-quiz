import "./App.css";
import QuizScore from "./components/QuizScore";
import QuizSection from "./components/QuizSection";

function App() {
  return (
    <div className="random-quiz">
      <div className="quiz-title">
        <h1>랜덤퀴즈 앱</h1>
        <QuizScore/>
      </div>
      <section className="quiz-section">
        <QuizSection />
      </section>
    </div>
  );
}

export default App;
