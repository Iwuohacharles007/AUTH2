import { useState } from "react";

function ScoreKeeper() {
  const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });

  function increasep1score() {
    setScores((oldScores) => {
      return { ...oldScores, p1Score: oldScores.p1Score + 1 };
    });
  }

  function increasep2score() {
    setScores((oldScores) => {
      return { ...oldScores, p2Score: oldScores.p2Score + 1 };
    });
  }

  function resetScores() {
    setScores({ p1Score: 0, p2Score: 0 });
  }

  return (
    <div>
      <p>Player 1: {scores.p1Score}</p>
      <p>Player 2: {scores.p2Score}</p>
      <button onClick={increasep1score}>+ Player 1</button>
      <button onClick={increasep2score}>+ Player 2</button>
      <button onClick={resetScores}>Reset</button>
    </div>
  );
}

export default ScoreKeeper;