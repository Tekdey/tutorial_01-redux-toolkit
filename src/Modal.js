import React from "react";

const Modal = () => {
  return (
    <div className="modal_container">
      <form
        action=""
        onSubmit={(event) => event.preventDefault()}
        onClick={(event) => event.stopPropagation()}
        className="modal_form"
      >
        <h3>Voulez-vous vraiment vider votre panier ?</h3>
        <div>
          <button className="bg-green-500">Oui</button>
          <button>Non</button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
