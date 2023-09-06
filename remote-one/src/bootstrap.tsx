import React from "react";
import { createRoot } from "react-dom/client";

function mount(el: HTMLElement) {
  const root = createRoot(el);
  root.render(<h2>Hello from Remote One</h2>);
}

if (process.env.NODE_ENV === "development") {
  document.body.innerHTML = '<div id="_remoteRoot"></div>';
  const appId = document.getElementById("_remoteRoot");

  if (appId) {
    mount(appId);
  }
}
