import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./components/store/ui-slice";
import Notification from "./components/UI/Notification";
import { fetchCartData } from "./components/store/cart-actions";

export const FIREBASE_URL =
  "https://redux-cart-my-books-default-rtdb.europe-west1.firebasedatabase.app/cart.json";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (cart.changed) {
      const sendCartData = async () => {
        dispatch(
          uiActions.showNotification({
            status: "pending",
            title: "Sending...",
            message: "Sending cart data!",
          })
        );

        const response = await fetch(FIREBASE_URL, {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        });

        if (!response.ok) {
          throw new Error("Sending cart data failed");
        }

        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: "Sending cart data successfully!",
          })
        );
      };

      if (isInitial) {
        isInitial = false;
        return;
      }

      sendCartData().catch((err) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: "Sending cart data failed!",
          })
        );
      });
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
