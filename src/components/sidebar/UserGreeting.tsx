import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { requestLogout } from "../../Redux/modules/user";

import Store from "../../Redux/configureStore";
import { IUserInfo } from "../shared/Types";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

import logo from "../../Asset/images/logo.png";

class UserGreeting extends React.Component<RouteComponentProps> {
  constructor(props: any) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  // public showSettings(event: { preventDefault(): void }): void {
  //   event.preventDefault();
  // }

  public handleLogout(): void {
    Store.dispatch(requestLogout()).then(() => this.props.history.push("/"));
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
          <div
            className="uk-offcanvas-bar"
            style={{ backgroundColor: "rgb(109,81,61)" }}
          >
            <span
              className="uk-offcanvas-close"
              uk-close
              uk-icon="icon: close; ratio: 1.5"
            ></span>

            <img
              src={
                props.User.image
                  ? props.User.image
                  : "http://uploads.webflow.com/56a09b532f2ef2655bb8cec2/56a0bb98e9a99a4669bf7f07_user_icon.png"
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
              <li className="logout">
                <div onClick={this.handleLogout}>로그아웃</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

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

const routerUserGreeting: React.ComponentClass = withRouter(UserGreeting);
export default connect(mapStateToProps, mapDispatchToProps)(routerUserGreeting);
