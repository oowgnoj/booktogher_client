import React, { ReactElement } from "react";
import { slide as Menu, State } from "react-burger-menu";
import { Link } from "react-router-dom";

class GuestGreeting extends React.Component {
  public showSettings(event: { preventDefault(): void }): void {
    event.preventDefault();
  }

  public render(): JSX.Element {
    return (
      <Menu
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
    );
  }

  public onStateChange = (state: State): void => {
    console.log(state.isOpen);
  };
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
