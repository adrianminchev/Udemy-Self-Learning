export default function GameOver({ gameWinner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {gameWinner && <p>The player "{gameWinner}" won the game!</p>}
      {!gameWinner && <p>It's a draw!</p>}
      <p>
        <button onClick={onRestart}>Play Again</button>
      </p>
    </div>
  );
}
