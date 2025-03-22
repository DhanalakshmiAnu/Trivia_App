import { useLocation, useNavigate } from "react-router-dom";

function ScorePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score || 0; // Ensure score is retrieved

  return (
    <div className="page-container">
      <h1 className="title">Your Score: {score}</h1>
      <button onClick={() => navigate("/")} className="button">Play Again</button>
    </div>
  );
}

export default ScorePage;
