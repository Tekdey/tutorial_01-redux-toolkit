import "./App.css";
import { data } from "./data";
import CartModal from "./Modal";

function App() {
  return (
    <>
      {false && <CartModal />}

      <div className="container">
        <h1>Panier</h1>

        <div className="cart_container">
          {data.map((item, index) => {
            return (
              <div className="cart-item">
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
                  <button>+</button>
                  <span>{item.amount}</span>
                  <button>-</button>
                </div>

                <div className="delete-button">
                  <span>Supprimer</span>
                </div>
              </div>
            );
          })}
        </div>

        <footer>
          <h3>Total : 56655656</h3>
          <button>Vider le panier</button>
        </footer>
      </div>
    </>
  );
}

export default App;
