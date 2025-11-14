import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment()); //dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement()); //dispatch({ type: "decrement" });
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); //dispatch({ type: "increase", amount: 5 });
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle()); //dispatch({ type: "toggle" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
