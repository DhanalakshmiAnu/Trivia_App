import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      navigate("/question");
    }
  };

  return (
    <div className="page-container">
      <h1 className="title">Login</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input-field"
      />
      <button onClick={handleLogin} className="button">Start Quiz</button>
    </div>
  );
}

export default LoginPage;
