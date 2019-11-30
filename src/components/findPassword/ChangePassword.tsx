import React, { ReactElement } from "react";
import { requestLogin } from "../../Redux/modules/user";
import { fetchUserResetToken, fetchPasswordChange } from "./fetchPassword";
import { validatePassword } from "../shared/helper";
import { IPasswordBody } from "../shared/Types";

import "./FindPassword.css";

interface IState {
  alert: boolean;
  passwordState: string;
  passwordCheckState: string;
  status: string;
}

class ChangePassword extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      alert: false,
      passwordState: "",
      passwordCheckState: "",
      status: "패스워드가 일치하지 않습니다. 다시 입력해주세요."
    };
    this.passwordStateChange = this.passwordStateChange.bind(this);
    this.passwordCheckStateChange = this.passwordCheckStateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public componentDidMount() {
    const setMessage = (status: number) => {
      if (status === 403) {
        alert(
          "링크의 유효기간이 만료되었습니다. 비밀번호 재설정을 다시 요청해주세요"
        );
        this.props.history.push("/findpassword");
      }
    };
    fetchUserResetToken(setMessage, this.props.match.params.id);
  }

  public handleSubmit(event: React.MouseEvent<HTMLElement>): void {
    event.preventDefault();

    const passwordChanged = (status: number): void => {
      if (status === 200) {
        alert("비밀번호 변경이 완료되었습니다. 다시 로그인해주세요");
        this.props.history.push("/signin");
      } else if (status === 403) {
        alert(
          "링크의 유효기간이 만료되었습니다. 비밀번호 재설정을 다시 요청해주세요"
        );
        this.props.history.push("/findpassword");
      } else {
        this.props.history.push("/");
      }
    };

    const body: IPasswordBody = {
      password: this.state.passwordState
    };

    if (this.state.passwordState === this.state.passwordCheckState) {
      if (validatePassword(this.state.passwordState)) {
        fetchPasswordChange(passwordChanged, body, this.props.match.params.id);
      } else {
        this.setState({
          alert: true,
          status:
            "비밀번호는 최소 8자 이상, 반드시 숫자가 1자리 이상 포함되어야 합니다."
        });
      }
    } else {
      this.setState({
        alert: true,
        status: "패스워드가 일치하지 않습니다. 다시 입력해주세요."
      });
    }
  }

  public passwordStateChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const updatingPassword: string = event.target.value;
    this.setState({ passwordState: updatingPassword });
  }

  public passwordCheckStateChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    const updatingPassword: string = event.target.value;
    this.setState({ passwordCheckState: updatingPassword });
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
          <h5>새로운 비밀번호를 입력해 주세요.</h5>
          <div>
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: lock"></span>
              <input
                className="uk-input"
                type="password"
                placeholder="새 비밀번호를 입력"
                onChange={this.passwordStateChange}
              />
            </div>
          </div>
          <div>
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: lock"></span>
              <input
                className="uk-input"
                type="password"
                placeholder="새 비밀번호 확인"
                onChange={this.passwordCheckStateChange}
              />
            </div>
          </div>
          <p uk-margin="true">
            <button
              className="uk-button uk-button-small"
              style={{ color: "gray" }}
              onClick={this.handleSubmit}
            >
              비밀번호 바꾸기
            </button>
          </p>
          <span>{required}</span>
        </form>
      </div>
    );
  }
}

export default ChangePassword;
