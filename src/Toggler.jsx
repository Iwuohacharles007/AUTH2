import { useState } from "react";

export default function Toggler() {
  const [isHappy, setIsHappy] = useState(true);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", background: "#1a1a2e", fontFamily: "sans-serif" }}>
      <div
        onClick={() => setIsHappy(!isHappy)}
        style={{
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: isHappy ? "#f9ca24" : "#6ab04c",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: isHappy ? "0 0 40px rgba(249,202,36,0.5)" : "0 0 40px rgba(106,176,76,0.5)",
          transition: "all 0.3s ease",
          userSelect: "none",
        }}
      >
        <svg width="140" height="140" viewBox="0 0 100 100">
          {/* Eyes */}
          <circle cx="35" cy="38" r="6" fill="#1a1a2e" />
          <circle cx="65" cy="38" r="6" fill="#1a1a2e" />

          {/* Mouth */}
          {isHappy ? (
            <path d="M 30 58 Q 50 78 70 58" stroke="#1a1a2e" strokeWidth="5" fill="none" strokeLinecap="round" />
          ) : (
            <path d="M 30 72 Q 50 52 70 72" stroke="#1a1a2e" strokeWidth="5" fill="none" strokeLinecap="round" />
          )}
        </svg>
      </div>

      <p style={{ color: "#aaa", marginTop: 24, fontSize: 16, transition: "color 0.3s ease" }}>
        Click the face to toggle!
      </p>
    </div>
  );
}