import React, { ReactElement, useState, useEffect } from "react";
import UserInfo from "../shared/userInfo";
import { connect } from "react-redux";
import { IUserInfo } from "../shared/Types";
import "./index.css";

interface IProps {
  userInfo: IUserInfo[];
}
const MyInfo: React.FC<IProps> = (props: any): ReactElement => {
  return (
    <div>
      <div className="wrapper">
        <h2 style={{ fontWeight: "bold" }}>your info </h2>
        <hr style={{ marginTop: "5px" }} />
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
