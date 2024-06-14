import "./footer.scss";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../hook/useCart";

export const Footer = () => {
  const { countItemsOnCart, handleOpenModal } = useCart();

  return (
    <div className="footer-app">
      <button onClick={handleOpenModal}>
        <span>( {countItemsOnCart} ) Veja seu carrinho</span>
        <FaShoppingCart />
      </button>
    </div>
  );
};
