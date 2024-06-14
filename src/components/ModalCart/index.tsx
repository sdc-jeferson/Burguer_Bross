import "./modal-cart.scss";
import Modal from "react-modal";
import { CartItem } from "../CartItem";
import { useState, FormEvent } from "react";
import { toast } from "react-toastify";
import { useCart } from "../../hook/useCart";

export const ModalCart = () => {
  const { modalIsOpen, handleCloseModal, burgerCart, setBurgerCart } =
    useCart();

  const [inputValue, setInputValue] = useState<string>("");

  function finlizeOrder(event: FormEvent) {
    event.preventDefault();

    if (inputValue.trim().length < 11) {
      toast.warning("Informe o endereço completo", {
        autoClose: 1000,
      });
      return;
    }

    toast.success("Pedido efetuado com sucesso!", {
      autoClose: 2000,
    });
    handleCloseModal();
    setBurgerCart([]);
    setInputValue("");
  }

  return (
    <div className="container-modal">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <h2>Seu carrinho</h2>
        <CartItem />
        <div
          className={
            burgerCart.length !== 0 ? "footer-modal" : "empty-footer-modal"
          }
        >
          <form className="content-adress-modal">
            <h3>Endereço de entrega</h3>
            <input
              type="text"
              placeholder="Digite seu endereço completo..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="footer-actions">
              <button onClick={handleCloseModal} className="btn-close-modal">
                Fechar
              </button>
              <button
                className="btn-finalize-order"
                onClick={finlizeOrder}
                type="submit"
              >
                Finalizar pedido
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};
