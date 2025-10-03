import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);

  // const handleSelectSquare = (rowIndex, colIndex) => {
  //   setGameBoard((previousGameBoard) => {
  //     const updatedBoard = [
  //       ...previousGameBoard.map((innerArray) => [...innerArray]),
  //     ]; // Updating the state in a immutable way, so that we create a new object in memory, that contains the old array elements, as child elements
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbolCol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbolCol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
