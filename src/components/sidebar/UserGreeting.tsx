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
      <div>
        <span
          uk-icon="icon: menu; ratio: 1.5"
          className="uk-button uk-margin-small-right"
          uk-toggle="target: #offcanvas-slide"
          style={{ marginTop: "25px", marginLeft: "10px" }}
        ></span>

        <div id="offcanvas-slide" uk-offcanvas="overlay: true">
          <div className="uk-offcanvas-bar" style={{ backgroundColor: "peru" }}>
            <span
              className="uk-offcanvas-close"
              uk-close
              uk-icon="icon: close; ratio: 1.5"
            ></span>

            <img
              src={
                props.User.image
                  ? props.User.image
                  : "https://app.helperbit.com/media/avatar/png/single_user_female_256x256.png"
              }
              alt=""
              width="100px"
            />
            <div
              className="icons"
              style={{
                float: "right",
                display: "flex",
                justifyContent: "space-between",
                width: "40%",
                marginTop: "43px"
              }}
            >
              <Link to="/mypage">
                <span uk-icon="icon: user; ratio: 1.2"></span>
              </Link>
              <Link to="/mylikes">
                <span uk-icon="icon: heart; ratio: 1.2"></span>
              </Link>
              <Link to="/">
                {" "}
                <span uk-icon="icon: home; ratio: 1.2"></span>
              </Link>
            </div>
            <h3>{props.User.name}</h3>
            <p>{props.User.profile}</p>
            <ul className="uk-nav uk-nav-default">
              <li className="uk-nav-divider"></li>

              <Link to="/postreview">
                <li className="uk-nav-header">서평 쓰기</li>
              </Link>

              <Link to="/postcuration">
                <li className="uk-nav-header">큐레이션 쓰기</li>
              </Link>

              <li
                className="uk-nav-divider"
                style={{ color: "transparent", fontSize: "1px" }}
              >
                {"__"}
              </li>

              <li>
                <Link to="/mybook">
                  {" "}
                  <div className="nav_myBook">나의 책</div>
                </Link>
              </li>
              <li>
                <Link to="/myreview">
                  {" "}
                  <div className="nav_myReview">나의 서평</div>
                </Link>
              </li>
              <li>
                <Link to="/mycuration">
                  <div className="nav_myCuration">나의 큐레이션</div>
                </Link>
              </li>
              <li
                className="uk-nav-divider"
                style={{ color: "transparent", fontSize: "1px" }}
              >
                {"__"}
              </li>
              <li>
                <a onClick={this.handleLogout} href="/">
                  로그아웃
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      /*   <Menu
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
      </Menu> */
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
