import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { requestLogout } from "../../Redux/modules/user";
import { slide as Menu, State } from "react-burger-menu";
import Store from "../../Redux/configureStore";
import { IUserInfo } from "../shared/Types";
import { Link } from "react-router-dom";
// import UserInfo from "./UserInfo";

// interface IBook {
//   id: number;
//   authors: string[];
//   thumbnail: string;
//   title: string;
// }
// interface IBookReading extends IBook {
//   start: string;
//   goal: string;
// }
// interface IBookFinished extends IBook {
//   start: string;
//   end: string;
// }
// interface IUserInfo {
//   id: number;
//   name: string;
//   email: string;
//   image: string;
//   profile: string;
//   to_read: IBook[];
//   reading: IBookReading[];
//   finished: IBookFinished[];
//   numBooksGoal: number;
//   numReviewsGoal: number;
// }

// interface IProps {
//   userinfo: IUserInfo;
// }

class UserGreeting extends React.Component {
  constructor(props: any) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  public showSettings(event: { preventDefault(): void }): void {
    event.preventDefault();
  }

  public handleLogout(): void {
    Store.dispatch(requestLogout()).then((response: Response) =>
      console.log("로그아웃 성공! response : ", response)
    );
  }

  public render(): JSX.Element {
    const props: any = this.props;
    return (
      <Menu
        disableAutoFocus
        customBurgerIcon={<span uk-icon="menu"></span>}
        customCrossIcon={<span uk-icon="close"></span>}
        onStateChange={this.onStateChange}
      >
        <img src={props.User.image} alt="" />
        <div className="sidebar_name">{props.User.name}</div>
        <div className="sidebar_profile">{props.User.profile}</div>
        <Link to="/mypage">
          {" "}
          <div id="home" className="menu-item">
            내 서재 가기
          </div>
        </Link>
        <Link to="/postreview">
          <div id="about" className="menu-item">
            서평쓰기
          </div>
        </Link>
        <Link to="/">
          <div id="contact" className="menu-item">
            홈
          </div>
        </Link>

        <a onClick={this.handleLogout} className="menu-item" href="/">
          로그아웃
        </a>
      </Menu>
    );
  }

  public onStateChange = (state: State): void => {
    console.log(state.isOpen);
  };
}

// const UserGreeting: React.SFC<IProps> = ({
//   userinfo
// }: IProps): React.ReactElement => {
//   return (
//     <div className="sidebar_user">
//       <UserInfo info={userinfo} />
//       <button>내 서재 가기</button>
//       <button>서평쓰기</button>
//       <button>홈</button>
//       <button>로그아웃</button>
//     </div>
//   );
// };

function mapStateToProps(state: any): any {
  return {
    User: state.user.User
  };
}

function mapDispatchToProps(dispatch: any): any {
  return {
    requestLogout: (): any => dispatch(requestLogout())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserGreeting);
