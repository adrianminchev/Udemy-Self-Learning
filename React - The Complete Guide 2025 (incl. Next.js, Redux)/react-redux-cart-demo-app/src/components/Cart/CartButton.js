import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = () => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle()); // we dispatch the returned action object
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
