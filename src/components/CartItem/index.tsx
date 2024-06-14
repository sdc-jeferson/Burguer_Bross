import "./cart-item.scss";
import emptyImg from "../../assets/clipboard.png";
import { useContext } from "react";
import { BurgerContext } from "../../contextBurg";
import { BurgerCartItem } from "../../contextBurg";

export const CartItem = () => {
  const context = useContext(BurgerContext);

  if (!context) {
    throw new Error(
      "useBurgerContext deve ser usado dentro de um BurgerProvider"
    );
  }

  const { burgerCart, removeItemOnTheCart, formatPrice, handleCloseModal } =
    context;

  return (
    <>
      {burgerCart.map((item: BurgerCartItem) => {
        {
          if (burgerCart.length > 0) {
            return (
              <div className="container-cart-item" key={item.id}>
                <div className="description-item">
                  <p>{item.name}</p>
                  <p>(Quantidade: {item.quantity} )</p>
                  <p>{formatPrice(item.value * item.quantity)}</p>
                </div>
                <span className="order-status">Finalizado</span>
                <button onClick={() => removeItemOnTheCart(item.id)}>
                  Remover
                </button>
              </div>
            );
          }
        }
      })}

      {burgerCart.length === 0 && (
        <div className="empty-cart-item">
          <img src={emptyImg} alt="" />
          <h3>Você ainda não tem itens adicionados ao carrinho</h3>
          <button onClick={handleCloseModal}>Voltar para Loja</button>
        </div>
      )}
    </>
  );
};
