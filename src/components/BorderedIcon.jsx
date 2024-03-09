import React from "react";

export default function BorderedIcon({ children, color }) {
  return (
    <div
      className={`hover:scale-105 transition-all duration-400 p-2 rounded-xl cursor-pointer`}
      style={{
        border: `2px solid ${color}`,
        color: color,
      }}
    >
      {children}
    </div>
  );
}
