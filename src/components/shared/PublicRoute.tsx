import React, { Component, ReactElement } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { IUserInfo } from "../shared/Types";
import PropTypes from "prop-types";

const PublicRoute: React.FC<any> = ({
  component: Component,
  restricted,
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
      render={props =>
        isLogin() && restricted ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  );
};

const mapStateToProps = (state: any): any => ({
  user: state.user.User
});

export default connect(mapStateToProps, null)(PublicRoute);
