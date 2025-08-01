import { StrictMode } from "react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { createRoot } from "react-dom/client";
import "./index.css";
import UserContext from "./context/UserContext";
import App from "./App.jsx";
import CaptainContext from "./context/CaptainContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CaptainContext>
      <UserContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserContext>
    </CaptainContext>
  </StrictMode>
);
