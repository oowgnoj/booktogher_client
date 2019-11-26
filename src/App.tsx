import React, { ReactElement, useEffect } from "react";
import { connect } from "react-redux";
import { requestUserInfo } from "./Redux/modules/user";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/index";
import Main from "./components/main/index";
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import Mypage from "./components/mypage";
import BookDetail from "./components/bookDetail/BookDetail";
import ReadReview from "./components/readReview/ReadReview";
import PostReview from "./components/writeReview/ModalTest";
import ReadCuration from "./components/readCuration/index";
import PostCuration from "./components/writeCuration/index";
import EditCuration from "./components/editCuration/index";
import Myreview from "./components/myReview";
import MyBook from "./components/myBook";
import MyCuration from "./components/myCuration";
import MyLikes from "./components/myLikes";
import Search from "./components/searchPage/SearchPage";
import EditPost from "./components/writeReview/EditPost"



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
        <Route path="/book/:id" component={BookDetail} />
        <Route path="/review/:id" component={ReadReview} />
        <Route path="/postreview" component={PostReview} />
        <Route path="/curation/:id" component={ReadCuration} />
        <Route path="/editcuration/:id" component={EditCuration} />
        <Route path="/postcuration" component={PostCuration} />
        <Route path="/myreview" component={Myreview} />
        <Route path="/mybook" component={MyBook} />
        <Route path="/mycuration" component={MyCuration} />
        <Route path="/mylikes" component={MyLikes} />
        <Route path="/search" component={Search} />
        <Route path="/editReview/:id" component={EditPost} />
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
