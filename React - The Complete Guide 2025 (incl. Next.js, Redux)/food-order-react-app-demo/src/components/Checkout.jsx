import { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "./common/Modal";
import { currencyFormatter } from "../util/formatting";
import Input from "./common/Input";
import ConfigurableButton from "./common/ConfigurableButton";
import UserProgressContext from "../store/UserProgressContext";

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)} </p>
        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
          <ConfigurableButton textOnly type="button" onClick={handleClose}>
            Close
          </ConfigurableButton>
          <ConfigurableButton>Submit Order</ConfigurableButton>
        </p>
      </form>
    </Modal>
  );
}
