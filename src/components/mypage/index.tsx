import React, { ReactElement, useState, useEffect } from "react";
import UserInfo from "../shared/userInfo";
import { connect } from "react-redux";
import { IUserInfo } from "../shared/Types";

interface IProps {
  userInfo: IUserInfo[];
}
const MyInfo: React.FC<IProps> = (props: any): ReactElement => {
  return (
    <div>
      <img
        style={{ width: "100%" }}
        src={
          "https://images.unsplash.com/photo-1471107191679-f26174d2d41e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80"
        }
      />
      <div className="wrapper">
        <UserInfo userInfo={props.user} />
      </div>
    </div>
  );
};

function mapStateToProps(state: any): any {
  return {
    user: state.user.User
  };
}

export default connect(mapStateToProps)(MyInfo);
