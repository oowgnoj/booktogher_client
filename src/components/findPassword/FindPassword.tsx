import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./FindPassword.css";

interface IState {
  alert: boolean;
  email: string;
  status: string;
}

class FindPassword extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      alert: false,
      email: "",
      status: "아이디 혹은 패스워드가 일치하지 않습니다. 다시 입력해주세요."
    };
    this.emailChange = this.emailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleSubmit(event: React.MouseEvent<HTMLElement>): void {
    event.preventDefault();
    const { email } = this.state;
    let isEmail: boolean;

    function checkEmail(address: string): boolean {
      const regExp: RegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      return regExp.test(address); // 형식에 맞는 경우 true 리턴
    }

    isEmail = checkEmail(email);

    if (isEmail) {
      //
    } else if (!isEmail) {
      this.setState({
        alert: true,
        status: "잘못된 형식의 이메일 주소입니다."
      });
    } 
  }

  public emailChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const updatingEmail: string = event.target.value;
    this.setState({ email: updatingEmail });
  }

  public render(): ReactElement {
    const required: ReactElement = this.state.alert ? (
      <span className="uk-alert-primary" uk-alert style={{ height: "50px" }}>
        <a className="uk-alert-close" uk-close></a>
        <p style={{ color: "#blue" }}>{this.state.status}</p>
      </span>
    ) : (
      <div style={{ height: "44px" }}></div>
    );

    return (
      <div className="find-password">
        <form>
          <div>
            <h5>계정을 입력해 주세요.</h5>
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: mail"></span>
              <input
                className="uk-input"
                type="email"
                title="정확한 이메일 주소를 입력하여주세요!"
                placeholder="이메일을 입력해주세요"
                onChange={this.emailChange}
              />
            </div>
          </div>         
          <p uk-margin="true">
            <button
              className="uk-button uk-button-small"
              style={{ color: "gray" }}
              onClick={this.handleSubmit}
            >
              비밀번호 찾기
            </button>
          </p>
          <span>{required}</span>
        </form>
      </div>
    );
  }
}


export default FindPassword;
