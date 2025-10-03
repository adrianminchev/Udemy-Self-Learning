import { useState } from "react";

export default function Player({ initialNameValue, symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialNameValue);

  function handleEditOnClick() {
    setIsEditing((editing) => !editing); // Reassuring that we are working with the latest available state (best practice suggestion)
  }

  function handleOnChange(e) {
    setPlayerName(e.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName} 
        onChange={handleOnChange} // Note: Listening to the change on the input and feeding the updated value back into the input is called two way binding
      />
    );
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditOnClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
