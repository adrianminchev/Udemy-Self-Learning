import { useContext } from "react";
import CartContext from "../store/CartContext";
import Modal from "./common/Modal";
import { currencyFormatter } from "../util/formatting";
import Input from "./common/Input";
import ConfigurableButton from "./common/ConfigurableButton";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost:3000/orders", requestConfig);

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  function handleFinish() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const customerData = Object.fromEntries(formData.entries());

    sendRequest({ order: { item: cartCtx.items, customer: customerData } });
  }

  let actions = (
    <>
      <ConfigurableButton textOnly type="button" onClick={handleClose}>
        Close
      </ConfigurableButton>
      <ConfigurableButton>Submit Order</ConfigurableButton>
    </>
  );

  if (isSending) {
    actions = <span>Sending order data...</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleFinish}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>We will get to your with more details via email shortly.</p>
        <p className="modal-actions">
          <ConfigurableButton onClick={handleFinish}>Okay</ConfigurableButton>
        </p>
      </Modal>
    );
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)} </p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        {error && <Err title="Failed to submit order" message={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}
