import "./card_burguer.scss";
import { FaCartPlus } from "react-icons/fa";
import { useCart } from "../../hook/useCart";
import { formatPrice } from "../../utils/formartPrice";
interface CardBurgerProps {
  idBurger: string;
  nameBurger: string;
  imageBurger: string;
  descrBurger: string;
  priceBurger: number;
}

export const CardBurger = ({
  idBurger,
  nameBurger,
  imageBurger,
  descrBurger,
  priceBurger,
}: CardBurgerProps) => {
  const { addBurgerOnCart } = useCart();
  const formattedPrice = formatPrice(priceBurger);

  return (
    <div className="card-burguer">
      <img src={imageBurger} alt="" />
      <div className="description-burger">
        <span>{nameBurger}</span>
        <p>{descrBurger}</p>

        <div className="footer-card-menu">
          <span>{formattedPrice}</span>
          <button
            onClick={() => addBurgerOnCart(nameBurger, priceBurger, idBurger)}
          >
            <FaCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
};
