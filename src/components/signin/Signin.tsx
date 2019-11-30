import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { requestLogin } from "../../Redux/modules/user";
import Store from "../../Redux/configureStore";
import "./Signin.css";

// import "../../../node_modules/uikit/dist/js/uikit-icons.min.js";
// import "../../../node_modules/uikit/dist/js/uikit.js";
// import "../../../node_modules/uikit/dist/css/uikit.css";

interface IState {
  alert: boolean;
  email: string;
  password: string;
  status: string;
}

class Signin extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      alert: false,
      email: "",
      password: "",
      status: "아이디 혹은 패스워드가 일치하지 않습니다. 다시 입력해주세요."
    };
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleSubmit(event: React.MouseEvent<HTMLElement>): void {
    event.preventDefault();
    const { email, password } = this.state;
    let isEmail: boolean;

    function checkEmail(address: string): boolean {
      const regExp: RegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      return regExp.test(address); // 형식에 맞는 경우 true 리턴
    }

    isEmail = checkEmail(email);

    if (isEmail && password) {
      Store.dispatch(requestLogin(email, password)).then(() => {
        console.log("지금의 props 는 뭘까", this.props);
        if (this.props.User._id) {
          console.log("로그인 성공 / this.props : ", this.props);
          this.props.history.push("/");
        } else if (this.props.User.error) {
          this.setState({
            alert: true,
            status: "아이디 혹은 패스워드가 일치하지 않습니다."
          });
        }
      });
    } else if (!isEmail) {
      this.setState({
        alert: true,
        status: "잘못된 형식의 이메일 주소입니다."
      });
    } else if (!password) {
      this.setState({
        alert: true,
        status: "패스워드를 입력해주세요"
      });
    }
  }

  public emailChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const updatingEmail: string = event.target.value;
    this.setState({ email: updatingEmail });
  }

  public passwordChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const updatingPassword: string = event.target.value;
    this.setState({ password: updatingPassword });
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
      <div className="signin">
        <form>
          <div>
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

          <div>
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: lock"></span>
              <input
                className="uk-input"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                onChange={this.passwordChange}
              />
            </div>
          </div>

          <p uk-margin="true">
            <button
              className="uk-button uk-button-small"
              style={{ color: "gray" }}
              onClick={this.handleSubmit}
            >
              SIGN IN
            </button>
          </p>
          <Link to="/findpassword">
            <p>계정을 잊어버리셨나요? </p>
          </Link>
          <span>{required}</span>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state: any): any {
  return {
    User: state.user.User,
    isLoggedIn: state.user.isLoggedIn
  };
}

function mapDispatchToProps(dispatch: any): any {
  return {
    requestLogin: (mail: string, pw: string): any =>
      dispatch(requestLogin(mail, pw))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
