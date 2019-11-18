import React, { ReactElement } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./Component/main/index";

const App: React.FC = (): ReactElement => {
  return (
    <div className="App">
      <Main />
    </div>
  );
};

export default App;
