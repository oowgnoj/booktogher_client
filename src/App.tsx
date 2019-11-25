import React, { ReactElement, useEffect } from "react";
import { connect } from "react-redux";
import { requestUserInfo } from "./Redux/modules/user";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/index";
import Main from "./components/main/index";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import Mypage from "./components/mypage";
import ReadReview from "./components/readReview/ReadReview";
import PostReview from "./components/writeReview/ModalTest";
import Myreview from "./components/myReview";
import MyBook from "./components/myBook";
import MyCuration from "./components/myCuration";
import MyLikes from "./components/myLikes";

const App: React.FC = (props: any): ReactElement => {
  useEffect(() => {
    props.checkUserStatus();
  }, []);

  return (
    <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/mypage" component={Mypage} />
        <Route path="/review/:id" component={ReadReview} />
        <Route path="/postreview" component={PostReview} />
        <Route path="/myreview" component={Myreview} />
        <Route path="/mybook" component={MyBook} />
        <Route path="/mycuration" component={MyCuration} />
        <Route path="/mylikes" component={MyLikes} />
        <Route path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

function mapDispatchToProps(dispatch: any): any {
  return {
    checkUserStatus: (): any => dispatch(requestUserInfo())
  };
}

export default connect(null, mapDispatchToProps)(App);
