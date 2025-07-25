import React, { useState } from "react";
import { getKnightMoves } from "./knight";
import "./KnightChessboard.css";

const KnightChessboard = () => {
  const [selected, setSelected] = useState(null);

  const handleCellClick = (row, col) => {
    setSelected([row, col]);
  };

  const knightMoves = selected ? getKnightMoves(...selected) : [];

  return (
    <div className="chessboard-grid">
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 8 }).map((_, col) => {
          const isLight = (row + col) % 2 === 0;
          const isSelected = selected && selected[0] === row && selected[1] === col;
          const isMove = knightMoves.some(([r, c]) => r === row && c === col);

          return (
            <div
              key={`${row}-${col}`}
              className={`cell ${isLight ? "light-square" : "dark-square"} 
                          ${isSelected ? "selected-square" : ""} 
                          ${isMove ? "knight-move-target" : ""}`}
              onClick={() => handleCellClick(row, col)}
            >
              {isSelected ? "♞" : ""}
            </div>
          );
        })
      )}
    </div>
  );
};

export default KnightChessboard;
