import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Store from "../../Redux/configureStore";
import { requestUserInfo } from "../../Redux/modules/user";
import { Socket } from "net";
import store from "../../Redux/configureStore";

class OAuth extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { popup: null };
    this.openPopup = this.openPopup.bind(this);
  }

  public componentDidMount() {
    // socket은 서버와 연결된 socket 인스턴스고, provider는 소셜 로그인 서비스의 이름이다 (facebook, kakao).
    const { socket, provider } = this.props;
    socket.on(provider, (res: any) => {
      // 서버에서 인증 처리 후, "facebook" 혹은 "kakao" 이벤트가 실행되며
      // 응답을 보내준다. 이후 socket.on() 이벤트 리스너의 콜백함수가 실행된다.
      this.state.popup.close(); // 응답을 받으면, 팝업창을 닫는다

      if (!res.error) {
        Store.dispatch(requestUserInfo())
          .then(() => {
            alert(`${provider} 계정으로 로그인 하셨습니다`);
            this.props.history.push("/");
          })
          .catch((err: Response) => {
            alert("회원정보를 확인할 수 없습니다. 다시 시도해주세요.");
          });
      } else {
        // 만약 서버에 문제가 있거나 사용자가 페이스북/카카오 이메일로
        // 벌써 계정을 따로 만들었다면, 에러 객체가 올 것이다.
        if (res.error.type === "DuplicateEmail") {
          alert(res.error.message);
        } else {
          alert(`일시적인 오류가 발생하였습니다. 다시 시도해주세요.`);
        }
        // 에러 핸들링 작업 필요
      }
    });
  }

  public componentWillUnmount() {
    const { socket, provider } = this.props;
    socket.off(provider);
  }

  public openPopup(e: any) {
    e.preventDefault();
    let { popup } = this.state;
    // 팝업창이 닫혀있으면, 팝업창을 다시 열어서 승인 페이지를 보여준다. 벌써 열려있다면, 아무것도 하지 않는다.
    if (!popup || popup.closed || popup.closed === undefined) {
      const { provider, socket } = this.props;
      const width = 600,
        height = 600;
      const left = window.innerWidth / 2 - width / 2;
      const top = window.innerHeight / 2 - height / 2;
      const server = "https://server.booktogether.org"; // booktogether 서버 url로 변경 필요

      // *주의: socketId query를 추가해야지 socket.on("facebook"), socket.on("kakao") 응답을 받을 수 있다.
      const url = `${server}/auth/${provider}?socketId=${socket.id}`;

      // 팝업창 열기
      popup = window.open(
        url,
        undefined,
        `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
      );
      // state에서 팝업창을 업데이트
      this.setState({ popup });
    }
  }

  render() {
    const { provider } = this.props;
    return (
      <div style={{ marginBottom: "15px" }}>
        <button
          onClick={this.openPopup}
          className="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom"
        >
          {provider}
        </button>
      </div>
    );
  }
}

export default withRouter(OAuth);
