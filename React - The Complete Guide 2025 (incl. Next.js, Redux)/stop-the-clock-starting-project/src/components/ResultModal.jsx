import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom"; // Used to help and map the visual appearance of the dialog to its location in the HTML structure (BP for accessability, as nested elements may be hidden by other elements in certain circumstances)

const ResultModal = forwardRef(function ResultModal( //forwardRef wrapper optional here and mandatory for older React version prior v19
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  }); //Helps make the component more reusable

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime}</strong> second
        {targetTime > 1 ? "s" : ""}.
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime}</strong>{" "}
        seconds left.
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
