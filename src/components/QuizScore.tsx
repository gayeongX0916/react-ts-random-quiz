type QuizScoreProps = {
  score: number;
};

const QuizScore = ({ score }: QuizScoreProps) => {
  return <div className="quiz-score">점수 : {score} / 10</div>;
};

export default QuizScore;
