import React, { ReactElement } from "react";
import { connect } from "react-redux";
import "./index.css";

import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";
import { IUserInfo } from "../shared/Types";

/*
(서버) 

(스토어)
subscribe 한 state 의 로그인 상태에 따라 sidebar 의 버튼들을 다르게 랜더링함
subscribe 한 state 의 유저정보를 보여줌
로그아웃을 누르면 state 의 상태 로그아웃으로 변경함
*/

class Sidebar extends React.Component {
  public render(): ReactElement {
    const props: any = this.props;

    const greeting: React.ReactElement = props.User.User._id ? (
      <UserGreeting />
    ) : (
      <GuestGreeting />
    );

    return (
      <div className="sidebar nav-overlay" style={{ position: "absolute" }}>
        {greeting}
      </div>
    );
  }
}

function mapStateToProps(state: any): any {
  return {
    User: state.user
  };
}

function mapDispatchToProps(dispatch: any): any {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
