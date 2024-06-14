import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { v4 as uuidv4 } from "uuid";
import { ModalCart } from "./components/ModalCart";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const listBurger = [
  {
    id: uuidv4(),
    name: "Cheese Burger Duplo",
    imageBurger: "./src/assets/hamb-1.png",
    description:
      "Delicie-se com dois hambúrgueres suculentos, queijo prato derretido, e nossa maionese da casa, tudo no pão de fermentação natural da Trigou.",
    price: 45.0,
  },
  {
    id: uuidv4(),
    name: "Smash Burger Supreme",
    imageBurger: "./src/assets/hamb-2.png",
    description:
      "Um smash burger perfeitamente prensado, queijo prato derretido e maionese da casa, servido no pão leve e fresco da Trigou.",
    price: 38.5,
  },
  {
    id: uuidv4(),
    name: "Classic Cheese Burger",
    imageBurger: "./src/assets/hamb-3.png",
    description:
      "Aproveite o clássico: hambúrguer suculento, queijo prato e maionese caseira no pão de fermentação natural da Trigou.",
    price: 32.0,
  },
  {
    id: uuidv4(),
    name: "Duplo Sabor Cheese Burger",
    imageBurger: "./src/assets/hamb-4.png",
    description:
      "Dois hambúrgueres saborosos com queijo prato derretido e maionese da casa, tudo no pão fresco da Trigou.",
    price: 42.0,
  },
  {
    id: uuidv4(),
    name: "Mega Cheese Burger",
    imageBurger: "./src/assets/hamb-5.png",
    description:
      "O dobro de hambúrguer, o dobro de queijo prato e a nossa famosa maionese da casa, no delicioso pão da Trigou.",
    price: 48.0,
  },
  {
    id: uuidv4(),
    name: "Cheese Burger Especial",
    imageBurger: "./src/assets/hamb-6.png",
    description:
      "Uma combinação especial de hambúrguer, queijo prato derretido e maionese da casa, tudo no pão de fermentação natural da Trigou.",
    price: 36.5,
  },
  {
    id: uuidv4(),
    name: "Cheese Burger Premium",
    imageBurger: "./src/assets/hamb-7.png",
    description:
      "Experimente o premium: hambúrguer suculento, queijo prato derretido e maionese da casa, servido no pão fresco da Trigou.",
    price: 49.0,
  },
  {
    id: uuidv4(),
    name: "Cheese Burger Gourmet",
    imageBurger: "./src/assets/hamb-8.png",
    description:
      "Um hambúrguer gourmet com queijo prato derretido e maionese da casa, tudo no pão de fermentação natural da Trigou.",
    price: 47.5,
  },
];

Modal.setAppElement("#root");

export const App = () => {
  //Apenas teste para quando a aplicação iniciar, o item ja está salvar no localStorage
  useEffect(() => {
    function saveListBurgerInLocalStorage() {
      return localStorage.setItem("@burgers", JSON.stringify(listBurger));
    }
    saveListBurgerInLocalStorage();
  }, []);

  return (
    <>
      <ToastContainer />
      <Header />
      <Menu burgers={listBurger} />
      <ModalCart />
      <Footer />
    </>
  );
};
