import LuckyN from "./LuckyN";
import { sum } from "./utils";

function allSameValue(dice) {
  return dice.every((v) => v === dice[0]);
}

function sumLessThanFour(dice) {
  return sum(dice) < 4;
}

function App() {
  return (
    <div>
      <LuckyN
        numDice={3}
        title="All Dice Must Match"
        winCheck={allSameValue}
      />

      <LuckyN
        numDice={2}
        title="Sum Must Be Less Than 4"
        winCheck={sumLessThanFour}
      />
    </div>
  );
}

export default App;