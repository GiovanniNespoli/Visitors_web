import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes/Router";
import GlobalStyle from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
    <GlobalStyle />
  </React.StrictMode>
);
