import React, { ReactElement } from "react";
import { requestLogin } from "../../Redux/modules/user";
import "./FindPassword.css";

interface IState {
  alert: boolean;
  prePassword: string;
  newPassword: string;
  status: string;
}

class ChangePassword extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      alert: false,
      prePassword: "",
      newPassword: "",
      status: "패스워드가 일치하지 않습니다. 다시 입력해주세요."
    };
    this.prePasswordChange = this.prePasswordChange.bind(this);
    this.newPasswordChange = this.newPasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleSubmit(event: React.MouseEvent<HTMLElement>): void {
    event.preventDefault();
    
  }

  public prePasswordChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const updatingPassword: string = event.target.value;
    this.setState({ prePassword: updatingPassword });
  }

  public newPasswordChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const updatingPassword: string = event.target.value;
    this.setState({ newPassword: updatingPassword });
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
                  onChange={this.prePasswordChange}
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
                  onChange={this.newPasswordChange}
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
