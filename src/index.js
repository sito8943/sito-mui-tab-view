import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";

import { Edit } from "@mui/icons-material";

import ComplexTable from "./App";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOMClient.createRoot(container);

const columns = [
  { id: "id", width: "90px", align: "left", label: "Id", padding: "normal" },
  {
    id: "name",
    width: "150px",
    align: "left",
    label: "Name",
    padding: "normal",
  },
];

const rows = [
  { id: 1, name: "Sito" },
  { id: 2, name: "Carlos" },
];

const singleSelectFunctions = [
  {
    func: () => {
      console.log("hola");
    },
    icon: <Edit color="primary" />,
    tooltip: "Hola mundo",
  },
];

// Initial render: Render an element to the root.
root.render(
  <StrictMode>
    <ComplexTable
      columns={columns}
      rows={rows}
      singleSelectFunctions={singleSelectFunctions}
    />
  </StrictMode>
);
