import React, { ReactElement } from "react";

import { Link } from "react-router-dom";

import logo from "../../Asset/images/logo.png";

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
          <div
            className="uk-offcanvas-bar"
            style={{ backgroundColor: "rgb(109,81,61)" }}
          >
            <span
              className="uk-offcanvas-close"
              uk-close
              uk-icon="icon: close; ratio: 1.5"
            ></span>

            <h3>서로모임에 오신 것을 환영합니다</h3>
            <p>
              안녕하세요. 책으로 모인 사람들의 공간
              서로모임입니다.
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
    );
  }

  /* public onStateChange = (state: State): void => {}; */
}

export default GuestGreeting;
