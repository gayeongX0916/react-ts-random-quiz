import "./App.css";

function App() {
  return (
    <div className="random-quiz">
      <div className="quiz-title">
        <h1>랜덤퀴즈 앱</h1>
        <div className="quiz-score">점수 : </div>
      </div>
      <section className="quiz-section">
        <h4>문제 : 1/10</h4>
        <h4>주제 : 영화</h4>
        <div className="quiz-question">문제 내용</div>
        <div className="quiz-button-container">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
        </div>
      </section>
    </div>
  );
}

export default App;
