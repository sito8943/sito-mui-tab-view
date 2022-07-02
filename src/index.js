import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import SitoContainer from "./App";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <StrictMode>
    <SitoContainer ignoreDefault>Hola Mundo</SitoContainer>
  </StrictMode>
);
