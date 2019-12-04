import React, {
  Component,
  ReactElement,
  useState,
  useEffect,
  useRef
} from "react";
import Clean from "../shared/CleanLoading";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { IUserInfo } from "../shared/Types";
import PropTypes from "prop-types";

const PrivateRoute: React.FC<any> = ({
  component: Component,
  user,
  ...rest
}: any) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
    } else {
      didMountRef.current = true;
    }
  }, [user._id]);

  return (
    <Route
      {...rest}
      render={props => {
        if (user._id === "") {
          return <Clean />;
        } else if (user.error) {
          {
            alert("로그인이 필요한 페이지입니다");
          }
          return <Redirect to="/signin" />;
        } else {
          return <Component {...props} />;
        }
      }}
    />
  );
};

const mapStateToProps = (state: any): any => ({
  user: state.user.User
});

export default connect(mapStateToProps, null)(PrivateRoute);
