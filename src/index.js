import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import TabView from "./App";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Initial render: Render an element to the root.
root.render(
  <StrictMode>
    <TabView
      tabs={["Hola", "Adiós"]}
      content={[<div>Hola</div>, <div>Adiós</div>]}
    />
  </StrictMode>
);
