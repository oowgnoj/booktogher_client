import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./FindPassword.css";
import { fetchFindPassword } from "./fetchPassword";
import { IEmailBody } from "../shared/Types";
import { validateEmail } from "../shared/helper";

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
    const isEmail: boolean = validateEmail(email);

    if (isEmail) {
      const body: IEmailBody = {
        email
      };

      const setMessage = (res: any): void => {
        if (res.error) {
          if (res.error.status === 400) {
            alert("모든 필수 입력 필드에 정보를 채우세요.");
          } else if (res.error.status === 404) {
            alert("입력하신 이메일로 가입되어 있는 계정이 없습니다.");
          } else if (res.error.status === 403) {
            if (res.error.type === "OAuthEmail") {
              alert("소셜 로그인으로 가입된 계정입니다.");
              this.props.history.push("./signin");
            } else if (res.error.type === "EmailError") {
              alert(
                "해당 이메일의 차단 또는 스팸 설정으로 인해 재설정 링크를 보낼 수 없습니다."
              );
            }
          }
        } else if (res.message) {
          alert("비밀번호 재설정 메일이 전송되었습니다.");
          this.props.history.push("/");
        }
      };
      fetchFindPassword(setMessage, body);
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
