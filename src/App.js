import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
// import { data } from "./data";
import CartModal from "./Modal";
import { openModal } from "./redux/reducer/CartModalReducer";
import {
  calculateTotal,
  decreaseItem,
  increaseItem,
  removeItem,
} from "./redux/reducer/CartReducer";

function App() {
  const dispatch = useDispatch();
  const { cart, cartModal: modal } = useSelector((state) => state);

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cart]);

  if (cart.cartItems.length === 0) {
    return (
      <h3 className="uppercase font-semibold text-5xl text-white text-center">
        Panier vide ...
      </h3>
    );
  }
  return (
    <>
      {modal.isActiv && <CartModal />}

      <div className="container">
        <h1>Panier</h1>

        <div className="cart_container">
          {cart.cartItems.map((item, index) => {
            return (
              <div className="cart-item" key={index}>
                <img
                  src={`/assets/image/${item.image}.jpg`}
                  alt="helloworld"
                  className="bougies"
                />
                <div className="cart-item_name">
                  <h3>{item.productName}</h3>
                  <h5>{item.category}</h5>
                </div>
                <div className="price">
                  <span>{item.price} €</span>
                </div>
                <div className="button-cart">
                  <button
                    onClick={() => dispatch(increaseItem({ id: item.id }))}
                  >
                    +
                  </button>
                  <span>{item.amount}</span>
                  <button
                    onClick={() => {
                      if (item.amount > 1) {
                        dispatch(decreaseItem({ id: item.id }));
                      } else {
                        dispatch(removeItem({ id: item.id }));
                      }
                    }}
                  >
                    -
                  </button>
                </div>

                <div className="delete-button">
                  <span onClick={() => dispatch(removeItem({ id: item.id }))}>
                    Supprimer
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <footer>
          <h3>Total : {cart.total.toFixed(2)} €</h3>
          <button onClick={() => dispatch(openModal())}>Vider le panier</button>
        </footer>
      </div>
    </>
  );
}

export default App;
