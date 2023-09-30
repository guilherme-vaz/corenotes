import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { NotesContextProvider } from "./providers/Notes/index.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NotesContextProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </NotesContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
