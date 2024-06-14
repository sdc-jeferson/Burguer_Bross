import "./card_burguer.scss";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { BurgerContext } from "../../contextBurg";

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
  const { addBurgerOnCart, formatPrice } = useContext(BurgerContext);

  return (
    <div className="card-burguer">
      <img src={imageBurger} alt="" />
      <div className="description-burger">
        <span>{nameBurger}</span>
        <p>{descrBurger}</p>

        <div className="footer-card-menu">
          <span>{formatPrice(priceBurger)}</span>
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
