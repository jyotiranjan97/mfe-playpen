import React from "react";
import { createRoot } from "react-dom/client";

document.body.innerHTML = '<div id="app"></div>';

const appId = document.getElementById("app");

if (appId) {
  const root = createRoot(appId);
  root.render(<h1>Hello World</h1>);
}
