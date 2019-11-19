import React, { ReactElement } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./component/main/index";
import Signup from "./component/signup/Signup";
import Signin from "./component/signin/Signin";
import Mypage from "./component/mypage/index";

const App: React.FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/mypage" component={Mypage} />
        {/* <Route path="/writereview" component={} */}
        <Route path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
