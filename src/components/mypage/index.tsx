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
