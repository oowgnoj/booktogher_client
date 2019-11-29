import React, { Component, ReactElement } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { IUserInfo } from "../shared/Types";
import PropTypes from "prop-types";

const PrivateRoute: React.FC<any> = ({
  component: Component,
  user,
  ...rest
}: any) => {
  const isLogin = () => {
    if (user._id) {
      return true;
    }
    return false;
  };
  return (
    <Route
      {...rest}
      render={props => {
        if (isLogin()) {
          return <Component {...props} />;
        } else {
          {
            alert("로그인이 필요한 페이지입니다");
          }
          return <Redirect to="/signin" />;
        }
      }}
    />
  );
};

const mapStateToProps = (state: any): any => ({
  user: state.user.User
});

export default connect(mapStateToProps, null)(PrivateRoute);
