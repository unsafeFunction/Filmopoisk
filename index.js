import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import store from "redux/store";
import App from "./src/containers/App";

import "./style.css";

ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById("root")
);
