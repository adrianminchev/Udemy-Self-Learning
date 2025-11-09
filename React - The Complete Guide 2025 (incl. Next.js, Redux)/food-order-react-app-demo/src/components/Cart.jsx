import { useContext } from "react";
import Modal from "./common/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import ConfigurableButton from "./common/ConfigurableButton";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <ConfigurableButton textOnly onClick={handleCloseCart}>
          Close
        </ConfigurableButton>
        {cartCtx.items.length > 0 && (
          <ConfigurableButton textOnly onClick={handleGoToCheckout}>
            <b>Go to Checkout</b>
          </ConfigurableButton>
        )}
      </p>
    </Modal>
  );
}
