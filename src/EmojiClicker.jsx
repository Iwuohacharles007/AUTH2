import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ Id: uuidv4(), emoji: "😊" }]);

  const addEmoji = () => {
    setEmojis((oldEmojis) => [...oldEmojis, { Id: uuidv4(), emoji: "😊" }]);
  };

  const deleteEmoji = (id) => {
    console.log(id);
    setEmojis((oldEmojis) => oldEmojis.filter((e) => e.Id !== id));
  };

  const makeAllHearts = () => {
    setEmojis((oldEmojis) => oldEmojis.map((e) => ({ ...e, emoji: "❤️" })));
  };

  return (
    <div>
      {emojis.map((e) => (
        <span onClick={() => deleteEmoji(e.Id)} key={e.Id}>{e.emoji}</span>
      ))}
      <button onClick={addEmoji}>Add emoji</button>
      <button onClick={makeAllHearts}>Make all hearts</button>
    </div>
  );
}