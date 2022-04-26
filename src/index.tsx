import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./App";
import "swiper/css/bundle";
import { appReducers } from "./reducers";
import { AppStateProvider } from "./contexts/AppState";

ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider reducer={appReducers} >
    <App />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
