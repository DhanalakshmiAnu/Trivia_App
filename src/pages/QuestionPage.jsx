import { useState } from "react";
import { useNavigate } from "react-router-dom";

function QuestionPage({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (index) => {
    let newScore = score;
    if (index === questions[currentQuestion].answer) {
      newScore += 1; // Increase score for correct answer
      setScore(newScore);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/score", { state: { score: newScore } }); // Pass updated score
    }
  };

  return (
    <div className="page-container">
      <h2 className="title">{questions[currentQuestion].question}</h2>
      {questions[currentQuestion].options.map((option, index) => (
        <button key={index} onClick={() => handleAnswer(index)} className="option-button">
          {option}
        </button>
      ))}
    </div>
  );
}

export default QuestionPage;
