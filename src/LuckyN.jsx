import { useState } from "react";
import { getRolls } from "./utils";
import Dice from "./Dice";
import Button from "./Button";

function LuckyN({ title = "Dice Game", numDice = 2, winCheck = () => false }) {
  const [dice, setDice] = useState(getRolls(numDice));

  const isWinner = winCheck(dice);

  const roll = () => setDice(getRolls(numDice));

  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <main className="LuckyN">
      <h1>{title}</h1>

      {isWinner && <h2>🎉 You Win!</h2>}

      <Dice dice={dice} color={isWinner ? "green" : "slateblue"} />

      {/* Your button uses default label "Click Me" */}
    <Button ClickFunc={roll} label="Re-Roll" />
    </main>
  );
}

export default LuckyN;