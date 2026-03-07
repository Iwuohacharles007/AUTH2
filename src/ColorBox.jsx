import { useState } from "react";
import "./ColorBox.css";

function ColorBox() {
  const [color, setColor] = useState("purple");

  const colors = ["red", "blue", "green", "yellow", "orange", "pink", "purple", "black", "white", "brown"];

  return (
    <div className="ColorBox">
      <div style={{ background: color, width: 300, height: 300, borderRadius: 16, border: "2px solid #ccc", transition: "background 0.3s ease" }}></div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20, maxWidth: 300 }}>
        {colors.map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            style={{
              width: 50,
              height: 50,
              background: c,
              border: color === c ? "3px solid black" : "2px solid #aaa",
              borderRadius: 8,
              cursor: "pointer",
              transition: "border 0.2s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default ColorBox;