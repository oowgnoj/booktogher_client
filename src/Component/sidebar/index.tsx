import React, { ReactElement } from "react";
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
  id: number;
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
  id: number;
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
  isLoggedIn: boolean;
}

class Sidebar extends React.Component {
  public state: IState = {
    isLoggedIn: true
  };

  public fUser: IUserInfo = {
    email: "aaa@gmail.com",
    finished: [
      {
        authors: ["단테"],
        end: "11/24/2019",
        id: 1,
        start: "11/15/2019",
        thumbnail:
          "https://image.aladin.co.kr/product/11889/1/cover500/8937434717_2.jpg",
        title: "신곡"
      }
    ],
    id: 1,
    image: "https://i-love-png.com/images/profile-417-1163876.png",
    name: "정혜경",
    numBooksGoal: 10,
    numReviewsGoal: 10,
    profile: "저는 말이죠...",
    reading: [
      {
        authors: ["톨스토이"],
        goal: "12/13/2019",
        id: 1,
        start: "10/29/2019",
        thumbnail:
          "https://image.aladin.co.kr/product/11889/1/cover500/8937434717_2.jpg",
        title: "안나 카레리나"
      }
    ],
    to_read: [
      {
        authors: ["도스토예프스키"],
        id: 1,
        thumbnail:
          "https://image.aladin.co.kr/product/11889/1/cover500/8937434717_2.jpg",
        title: "죄와 벌"
      }
    ]
  };

  public render(): ReactElement {
    const { isLoggedIn } = this.state;
    const greeting: React.ReactElement = isLoggedIn ? (
      <UserGreeting userinfo={this.fUser} />
    ) : (
      <GuestGreeting />
    );

    return <div className="sidebar">{greeting}</div>;
  }
}
/*

const RecoCollectionList: React.SFC<IProps> = ({
  collections
}: IProps): ReactElement => {
  const collectionList: React.ReactElement[] = collections.map(
    (collection, index) => (
      <RecoCollectionEntry collection={collection} key={index} />
    )
  );
  return (
    <div className="main_collection_list">
      <div className="uk-child-width-1-2@m  uk-flex uk-flex-center" uk-grid>
        {collectionList}
      </div>
    </div>
  );
};
*/

export default Sidebar;
