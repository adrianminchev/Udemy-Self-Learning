import { useState } from "react";
import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectSquare = () => {
    setActivePlayer((currActPlayer) => (currActPlayer === "X" ? "O" : "X"));
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialNameValue=" Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialNameValue=" Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
      LOG
    </main>
  );
}

export default App;
