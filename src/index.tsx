import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import "../node_modules/uikit/dist/js/uikit.js";
import "../node_modules/uikit/dist/css/uikit.css";
import "../node_modules/uikit/dist/js/uikit-icons.min.js";

import { Provider } from "react-redux";
import Store from "./Redux/configureStore";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
