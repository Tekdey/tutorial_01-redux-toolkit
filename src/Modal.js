import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "./redux/reducer/CartModalReducer";
import { clearCart } from "./redux/reducer/CartReducer";
const Modal = () => {
  const dispatch = useDispatch();

  return (
    <div className="modal_container" onClick={() => dispatch(closeModal())}>
      <form
        action=""
        onSubmit={(event) => event.preventDefault()}
        onClick={(event) => event.stopPropagation()}
        className="modal_form"
      >
        <h3>Voulez-vous vraiment vider votre panier ?</h3>
        <div>
          <button
            className="bg-green-500"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            Oui
          </button>
          <button
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Non
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
