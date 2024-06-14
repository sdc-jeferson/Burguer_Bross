import { useContext } from "react";
import { BurgerContext } from "../../contextBurg";

export function useCart() {
  const context = useContext(BurgerContext);
  return context;
}
