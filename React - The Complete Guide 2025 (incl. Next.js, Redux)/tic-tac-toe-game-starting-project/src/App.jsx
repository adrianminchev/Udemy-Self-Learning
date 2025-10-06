import { useState } from "react";
import Player from "./components/Player.jsx";
import TurnLog from "./components/TurnLog.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { BOARD_WINNING_COMBOS } from "./board-winning-combos.js";
import GameOver from "./components/GameOver.jsx";

const PLAYERS_LIST = {
  X: "Player 1",
  O: "PLAYER 2",
};
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
};

const deriveWinner = (gameBoard, players) => {
  let hasWinner;

  for (const combination of BOARD_WINNING_COMBOS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      hasWinner = players[firstSquareSymbol];
    }
  }

  return hasWinner;
};

const deriveGameBoard = (gameTurns) => {
  let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])]; //Arrays are reference types, therefore creating a deep copy of nested arrays is crucial to prevent unintended mutations and ensure proper game state resets

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS_LIST);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const hasWinner = deriveWinner(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !hasWinner;

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  };

  const handleGameReset = () => {
    setGameTurns([]);
  };

  const handlePlayerNameChange = (symbol, newPlayerName) => {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: newPlayerName };
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialNameValue={PLAYERS_LIST.X}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            initialNameValue={PLAYERS_LIST.O}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(hasWinner || hasDraw) && (
          <GameOver gameWinner={hasWinner} onRestart={handleGameReset} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <TurnLog turns={gameTurns} />
    </main>
  );
}

export default App;
