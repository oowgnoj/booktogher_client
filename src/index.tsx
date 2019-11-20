import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import Mypage from "./component/mypage/index";
import "../node_modules/uikit/dist/css/uikit.css";
import "../node_modules/uikit/dist/js/uikit.js";
import "../node_modules/uikit/dist/js/uikit-icons.min.js";
// import MyPage from "./component/mypage/index";
import { Provider } from "react-redux";
import Store from "./Redux/configureStore";

ReactDOM.render(
  <Provider store={Store}>
    {console.log(Store.getState())}
    <Mypage />
  </Provider>,
  document.getElementById("root")
);
