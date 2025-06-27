import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/serviceWorkerRegistration.js")  
      .then((registration) => {
        console.log("Service Worker registrado:", registration);
      })
      .catch((error) => {
        console.error("Erro ao registrar Service Worker:", error);
      });
  });
}
