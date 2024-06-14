import { ReactNode, createContext, useState } from "react";
import { produce } from "immer";

export interface BurgerContextType {
  countItemsOnCart: number;
  addBurgerOnCart: (name: string, value: string, id: string) => void;
  burgerCart: BurgerCartItem[];
  modalIsOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  setBurgerCart: React.Dispatch<React.SetStateAction<BurgerCartItem[]>>;
  removeItemOnTheCart: (id: string) => void;
  formatPrice: (value: number) => void;
}

export interface BurgerCartItem {
  id: string;
  name: string;
  value: string;
  quantity: number;
}

interface BurgerProviderProps {
  children: ReactNode;
}
export const BurgerContext = createContext({} as BurgerContextType);

export const BurgerProvider = ({ children }: BurgerProviderProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [burgerCart, setBurgerCart] = useState<BurgerCartItem[]>([]);
  const countItemsOnCart = burgerCart.length;

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }

  // ================================================================================
  function addBurgerOnCart(name: string, value: string, id: string) {
    const existingItemIndex = burgerCart.findIndex((item) => item.id === id);

    const infosForAddBurgeronCart = {
      id,
      name,
      value,
      quantity: 1,
    };

    if (existingItemIndex < 0) {
      const newCart = produce(burgerCart, (draft) => {
        draft.push(infosForAddBurgeronCart);
      });
      setBurgerCart(newCart);
    }

    if (existingItemIndex !== -1) {
      const newCart = produce(burgerCart, (draft) => {
        draft[existingItemIndex].quantity += 1;
      });

      setBurgerCart(newCart);
    }
  }

  function removeItemOnTheCart(id: string) {
    const existingItemIndex = burgerCart.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {
      const newCart = produce(burgerCart, (draft) => {
        draft[existingItemIndex].quantity -= 1;
        if (draft[existingItemIndex].quantity === 0) {
          draft.splice(existingItemIndex, 1);
        }
      });
      setBurgerCart(newCart);
    }
  }

  //  ===================================================================================

  function formatPrice(value: number) {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }

  const contextValue = {
    handleOpenModal,
    handleCloseModal,
    addBurgerOnCart,
    removeItemOnTheCart,
    formatPrice,
    countItemsOnCart,
    modalIsOpen,
    setBurgerCart,
    burgerCart,
  };

  return (
    <>
      <BurgerContext.Provider value={contextValue}>
        {children}
      </BurgerContext.Provider>
    </>
  );
};
