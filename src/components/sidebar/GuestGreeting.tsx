import React, { ReactElement } from "react";
import { slide as Menu, State } from "react-burger-menu";
import { Link } from "react-router-dom";

class GuestGreeting extends React.Component {
  public showSettings(event: { preventDefault(): void }): void {
    event.preventDefault();
  }

  public render(): JSX.Element {
    return (
      <div>
        <span
          uk-icon="icon: menu; ratio: 1.5"
          className="uk-button uk-margin-small-right"
          uk-toggle="target: #offcanvas-slide"
          style={{ marginTop: "25px", marginLeft: "10px" }}
        ></span>

        <div
          id="offcanvas-slide"
          uk-offcanvas="overlay: true, esc-close: true, bg-close:true"
        >
          <div className="uk-offcanvas-bar" style={{ backgroundColor: "peru" }}>
            <span
              className="uk-offcanvas-close"
              uk-close
              uk-icon="icon: close; ratio: 1.5"
            ></span>

            <h3>서로모임에 오신 것을 환영합니다</h3>
            <p>
              안녕하세요. 서로모임 소개가 필요합니다. 책으로 모인 사람들의 공간
              서로모임입니다. 벌써 2주가 지나갔네요!
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
                marginBottom: "30px"
              }}
            >
              <Link to="/">
                <span uk-icon="icon: home; ratio: 1.2"></span>
              </Link>
            </div>

            <ul className="uk-nav uk-nav-default">
              <li className="uk-nav-divider"></li>
              <li className="uk-nav-header">
                <Link to="/signin">
                  <div className="nav_login">로그인</div>
                </Link>
              </li>
              <li className="uk-nav-header">
                <Link to="/signup">
                  <div className="nav_signup">회원가입</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      /*
      <Menu
        disableAutoFocus
        customBurgerIcon={<span uk-icon="menu"></span>}
        customCrossIcon={<span uk-icon="close"></span>}
        onStateChange={this.onStateChange}
      >
        <Link to="/signin">
          <div id="home" className="menu-item">
            로그인
          </div>
        </Link>
        <Link to="/signup">
          <div id="about" className="menu-item">
            회원가입
          </div>
        </Link>
        <Link to="/">
          <div id="contact" className="menu-item">
            홈
          </div>
        </Link>
        <div onClick={this.showSettings} className="menu-item--small">
          Settings
        </div>
      </Menu>
      */
    );
  }

  public onStateChange = (state: State): void => {};
}

// const GuestGreeting: React.SFC = (): React.ReactElement => {
//   return (
//     <div className="sidebar_guest">
//       <button>로그인</button>
//       <button>회원가입</button>
//       <button>홈</button>
//     </div>
//   );
// };

export default GuestGreeting;
