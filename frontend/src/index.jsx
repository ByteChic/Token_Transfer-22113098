import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Sepolia } from "@thirdweb-dev/chains";
import reportWebVitals from "./reportWebVitals";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(

  <ThirdwebProvider
    activeChain={Sepolia}
    clientId={process.env.REACT_APP_TEMPLATE_CLIENT_ID}
  >
    <App />
  </ThirdwebProvider>

);

reportWebVitals();
