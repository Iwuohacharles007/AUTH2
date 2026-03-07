import { useState } from "react";

function generateGameBoard() {
  console.log("MAKING A NEW GAME BOARD");
  return Array(5000).fill(null);
}

export default function Dumbo() {
  const [board, setBoard] = useState(generateGameBoard);
  
  return (
    <button onClick={() => setBoard("changed")}>
      CLICK ME TO CHANGE State
    </button>
  );
}