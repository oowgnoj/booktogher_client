import React, { Component } from "react";

interface IProps {
  provider: string;
  socket: any;
}

interface IState {
  popup: any;
}

export default class OAuth extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { popup: null };
    this.openPopup = this.openPopup.bind(this);
  }

  public componentDidMount(): void {
    // socket은 서버와 연결된 socket 인스턴스고, provider는 소셜 로그인 서비스의 이름이다 (facebook, kakao).
    const { socket, provider } = this.props;
    socket.on(provider, (res: any) => {
      // 서버에서 인증 처리 후, "facebook" 혹은 "kakao" 이벤트가 실행되며
      // 응답을 보내준다. 이후 socket.on() 이벤트 리스너의 콜백함수가 실행된다.
      this.state.popup.close(); // 응답을 받으면, 팝업창을 닫는다
      if (!res.error) {
        console.log("Redirect"); // 리디렉트 작업 필요
      } else {
        // 만약 서버에 문제가 있거나 사용자가 페이스북/카카오 이메일로
        // 벌써 계정을 따로 만들었다면, 에러 객체가 올 것이다.
        console.log("여기? ", res.error.message); // 에러 핸들링 작업 필요
      }
    });
  }

  public openPopup() {
    let { popup } = this.state;
    // 팝업창이 닫혀있으면, 팝업창을 다시 열어서 승인 페이지를 보여준다. 벌써 열려있다면, 아무것도 하지 않는다.
    if (!popup || popup.closed || popup.closed === undefined) {
      const { provider, socket } = this.props;
      const width = 600,
        height = 600;
      const left = window.innerWidth / 2 - width / 2;
      const top = window.innerHeight / 2 - height / 2;
      const server = "http://localhost:5000"; // booktogether 서버 url로 변경 필요

      // *주의: socketId query를 추가해야지 socket.on("facebook"), socket.on("kakao") 응답을 받을 수 있다.
      const url = `${server}/auth/${provider}?socketId=${socket.id}`;

      // 팝업창 열기
      popup = window.open(
        url,
        `${null}`,
        `toolbar=no, location=no, directories=no, status=no, menubar=no, 
      scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
      height=${height}, top=${top}, left=${left}`
      );
      // state에서 팝업창을 업데이트
      this.setState({ popup });
    }
  }

  public render() {
    const { provider } = this.props;
    return (
      <button
        className="uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom"
        style={{ width: "90%", marginTop: "5%" }}
        onClick={this.openPopup}
      >
        {provider}
      </button>
    );
  }
}
