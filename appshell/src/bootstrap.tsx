import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

document.body.innerHTML = '<div id="app"></div>';

const appId = document.getElementById("app");

if (appId) {
  const devRoot = createRoot(appId);
  devRoot.render(<App />);
}
