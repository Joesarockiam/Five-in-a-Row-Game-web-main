import React from "react";

const Rules = () => {
  return (
    <div
      style={{
        padding: "20px",
        width: "280px",
        backgroundColor: "#f0f8ff", // light blue background
        border: "2px solid #007bff",
        borderRadius: "10px",
        boxShadow: "0px 4px 12px rgba(0, 123, 255, 0.2)",
        fontWeight: "bold",
        color: "#007bff", // blue text
      }}
    >
      <h3 style={{ borderBottom: "1px solid #007bff", paddingBottom: "8px", marginBottom: "15px" }}>
        Game Rules
      </h3>
      <ul style={{ fontSize: "16px", paddingLeft: "20px", lineHeight: "1.6" }}>
        <li>Player uses black stones.</li>
        <li>AI uses white stones.</li>
        <li>Take turns placing stones on the board.</li>
        <li>First to get five in a row (horizontal, vertical, or diagonal) wins.</li>
        <li>You can undo your last move using "UNDO MOVE".</li>
        <li>Click "RESTART GAME" to reset the board.</li>
      </ul>
    </div>
  );
};

export default Rules;
