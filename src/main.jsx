import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import "katex/dist/katex.min.css";
import "./index.css";
import Theme from "./components/Theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={Theme}>
    <App />
  </ChakraProvider>
);
