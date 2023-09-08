import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserHistory,
  InitialEntry,
  MemoryHistory,
  createBrowserHistory,
  createMemoryHistory,
} from "history";
import App from "./App";

function mount(
  el: HTMLElement,
  {
    onNavigate,
    defaultHistory,
    initialPath,
  }: {
    onNavigate?: () => void;
    defaultHistory: BrowserHistory | MemoryHistory;
    initialPath?: InitialEntry;
  }
) {
  let history = defaultHistory;

  if (initialPath) {
    history = createMemoryHistory({
      initialEntries: [initialPath],
    });
  }

  if (onNavigate) {
    history.listen(onNavigate);
  }

  const root = createRoot(el);
  root.render(<App history={history} />);

  return {
    onParentNavigate({
      location: { pathname: nextPathname },
    }: {
      location: { pathname: string };
    }) {
      const { pathname } = history.location;
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
}

if (process.env.NODE_ENV === "development") {
  document.body.innerHTML = '<div id="_remoteRoot"></div>';
  const appId = document.getElementById("_remoteRoot");

  if (appId) {
    mount(appId, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
