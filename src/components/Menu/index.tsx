import "./menu.scss";
import { CardBurger } from "../CardBurger";

interface PropertyListburger {
  id: string;
  name: string;
  imageBurger: string;
  description: string;
  price: number;
}

interface MenuProps {
  burgers: PropertyListburger[];
}

export const Menu = ({ burgers }: MenuProps) => {
  return (
    <div className="container-menu">
      <h2>Conheça nosso menu</h2>
      <div className="content-menu-burgers">
        {burgers.map((burg: PropertyListburger) => (
          <CardBurger
            key={burg.id}
            idBurger={burg.id}
            nameBurger={burg.name}
            imageBurger={burg.imageBurger}
            descrBurger={burg.description}
            priceBurger={burg.price}
          />
        ))}
      </div>
    </div>
  );
};
