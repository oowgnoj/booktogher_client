import React, { ReactElement } from "react";
import { slide as Menu, State } from "react-burger-menu";

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
        <a id="home" className="menu-item" href="/signin">
          로그인
        </a>
        <a id="about" className="menu-item" href="/signup">
          회원가입
        </a>
        <a id="contact" className="menu-item" href="/">
          홈
        </a>
        <a onClick={this.showSettings} className="menu-item--small" href="">
          Settings
        </a>
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
