import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.scss";
import { BurgerProvider } from "./contextBurg.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BurgerProvider>
      <App />
    </BurgerProvider>
  </React.StrictMode>
);
