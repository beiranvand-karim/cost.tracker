import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import App from "./components/App";
import ReactDOM from "react-dom";
import { store } from "./store";
import React from "react";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
