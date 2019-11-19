import React, { ReactElement } from "react";
import { connect } from "react-redux";
import "./index.css";

import GuestGreeting from "./GuestGreeting";
import UserGreeting from "./UserGreeting";

/*
(서버) 

(스토어)
subscribe 한 state 의 로그인 상태에 따라 sidebar 의 버튼들을 다르게 랜더링함
subscribe 한 state 의 유저정보를 보여줌
로그아웃을 누르면 state 의 상태 로그아웃으로 변경함
*/

interface IBook {
  _id: number;
  authors: string[];
  thumbnail: string;
  title: string;
}
interface IBookReading extends IBook {
  start: string;
  goal: string;
}
interface IBookFinished extends IBook {
  start: string;
  end: string;
}
interface IUserInfo {
  _id: number;
  name: string;
  email: string;
  image: string;
  profile: string;
  to_read: IBook[];
  reading: IBookReading[];
  finished: IBookFinished[];
  numBooksGoal: number;
  numReviewsGoal: number;
}

interface IState {
  isLogged: boolean;
}

class Sidebar extends React.Component {
  // public state: IState = {
  //   isLogged: true
  // };

  public fUser: IUserInfo = {
    _id: 1,
    email: "aaa@gmail.com",
    finished: [
      {
        _id: 1,
        authors: ["단테"],
        end: "11/24/2019",
        start: "11/15/2019",
        thumbnail:
          "https://image.aladin.co.kr/product/11889/1/cover500/8937434717_2.jpg",
        title: "신곡"
      }
    ],
    image: "https://i-love-png.com/images/profile-417-1163876.png",
    name: "정혜경",
    numBooksGoal: 10,
    numReviewsGoal: 10,
    profile: "저는 말이죠...",
    reading: [
      {
        _id: 1,
        authors: ["톨스토이"],
        goal: "12/13/2019",
        start: "10/29/2019",
        thumbnail:
          "https://image.aladin.co.kr/product/11889/1/cover500/8937434717_2.jpg",
        title: "안나 카레리나"
      }
    ],
    to_read: [
      {
        _id: 1,
        authors: ["도스토예프스키"],
        thumbnail:
          "https://image.aladin.co.kr/product/11889/1/cover500/8937434717_2.jpg",
        title: "죄와 벌"
      }
    ]
  };

  public render(): ReactElement {
    const props: any = this.props;
    const greeting: React.ReactElement = props.isLoggedIn ? (
      <UserGreeting />
    ) : (
      <GuestGreeting />
    );

    return <div className="sidebar">{greeting}</div>;
  }
}

function mapStateToProps(state: any): any {
  console.log("로그인 여부 state!!", state);
  return {
    isLoggedIn: state.handleUserActions.isLoggedIn
  };
}

function mapDispatchToProps(dispatch: any): any {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
