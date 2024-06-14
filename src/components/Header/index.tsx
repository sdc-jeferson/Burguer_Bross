import "./header.scss";
import logoImg from "../../assets/hamb-8.png";
import headerImg from "../../assets/bg.png";
import { getHours } from "date-fns";

export const Header = () => {
  const currentHour = getHours(new Date());
  const isOpenLocation = currentHour >= 18 && currentHour < 22;

  return (
    <div className="container-header">
      <img src={headerImg} alt="" className="background-header-image" />
      <div className="content-header">
        <img src={logoImg} alt="" />
        <h1>BurgerBros</h1>
        <p>Avenida Almirante Maximiano Fonseca, Zona Portuária, RS</p>
        <span className={isOpenLocation ? "open-location" : "location-closed"}>
          Seg á Dom - 18:00 as 22:00
        </span>
      </div>
    </div>
  );
};
