import React, { ReactElement, useEffect } from "react";
import { connect } from "react-redux";
import { requestUserInfo } from "./Redux/modules/user";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/shared/PrivateRoute";
import NotFound from "./components/shared/NotFoundPage";
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
import EditPost from "./components/writeReview/EditPost";
import SearchForm from "./components/searchPage/SearchForm";
import Footer from "./components/footer/Footer";
import FindPassword from "./components/findPassword/FindPassword";
import ChangePassword from "./components/findPassword/ChangePassword";

const App: React.FC = (props: any): ReactElement => {
  useEffect(() => {
    props.checkUserStatus();
  }, []);

  return (
    <BrowserRouter>
      <Sidebar />
      <SearchForm />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <PrivateRoute path="/mypage" component={Mypage} exact />
        <Route path="/book/:id" component={BookDetail} />
        <Route path="/review/:id" component={ReadReview} />
        <PrivateRoute path="/postreview" component={PostReview} exact />
        <Route path="/curation/:id" component={ReadCuration} />
        <PrivateRoute path="/editcuration/:id" component={EditCuration} exact />
        <PrivateRoute path="/postcuration" component={PostCuration} exact />
        <PrivateRoute path="/myreview" component={Myreview} exact />
        <PrivateRoute path="/mybook" component={MyBook} exact />
        <PrivateRoute path="/mycuration" component={MyCuration} exact />
        <PrivateRoute path="/mylikes" component={MyLikes} exact />
        <Route path="/search/:keyWord" component={Search} />
        <PrivateRoute path="/editReview/:id" component={EditPost} exact />
        <Route path="/searchForm" component={SearchForm} />
        <Route path="/findpassword" component={FindPassword} />
        <Route path="/reset/:id" component={ChangePassword} />
        <Route path="/404" component={NotFound} />
        <Route path="*" exact={true} component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

function mapDispatchToProps(dispatch: any): any {
  return {
    checkUserStatus: (): any => dispatch(requestUserInfo())
  };
}

export default connect(null, mapDispatchToProps)(App);
