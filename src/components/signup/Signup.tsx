import React, { ReactElement } from "react";
import { validatePassword, validateEmail } from "../shared/helper";
import "./Signup.css";

import io from "socket.io-client";
import OAuthButton from "../signin/OAuthButton";

// import "../../../node_modules/uikit/dist/js/uikit-icons.min.js";
// import "../../../node_modules/uikit/dist/js/uikit.js";
// import "../../../node_modules/uikit/dist/css/uikit.css";

interface IState {
  alert: boolean;
  mail: string; // req.body 의 key 값의 email 과 중복되는 문제 해결을 위해 mail 로 변경
  password1: string;
  password2: string;
  status: string;
  username: string; // req.body 의 key 값의 name 과 중복되는 문제 해결을 위해 mail 로 변경
}

const server: string = "https://server.booktogether.org";

const providers = ["facebook", "kakao"];
const socket = io(server, { transports: ["polling"] });

class SignUp extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      alert: false,
      mail: "",
      password1: "",
      password2: "",
      status: "모든 항목을 입력해주세요.",
      username: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordOneChange = this.passwordOneChange.bind(this);
    this.passwordTwoChange = this.passwordTwoChange.bind(this);
  }

  public handleSubmit(event: React.MouseEvent<HTMLElement>): void {
    event.preventDefault();
    const { mail, username, password1, password2 } = this.state;

    let isEmail: boolean;
    isEmail = validateEmail(mail);

    if (!isEmail || password1 !== password2) {
      if (!isEmail) {
        this.setState({
          alert: true,
          status: "잘못된 형식의 이메일 주소입니다. 다시 입력해주세요."
        });
      } else if (password1 !== password2) {
        this.setState({
          alert: true,
          status: "입력하신 패스워드가 일치하지 않습니다. 다시 확인해주세요."
        });
      }
    } else if (password1 === password2 && !validatePassword(password1)) {
      this.setState({
        alert: true,
        status: `비밀번호는 최소 8자 이상, 반드시 숫자가 1자리 이상 포함되어야 합니다.`
      });
    } else if (
      mail &&
      password1 &&
      password2 &&
      username &&
      validatePassword(password1)
    ) {
      fetch("https://server.booktogether.org/auth/signup", {
        body: JSON.stringify({
          email: mail,
          name: username,
          password: password1
        }),
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      })
        .then((response: Response) => {
          if (response.status === 201) {
            alert("회원가입이 완료되었습니다. 로그인해주세요.");
            this.props.history.push("/signin");
          } else if (response.status === 409) {
            alert("이미 사용중인 메일 주소입니다.");
          } else if (response.status === 400) {
            alert("모든 필수 입력 필드에 정보를 채우세요.");
          }
        })
        .catch((err: Error) => this.props.history.push("/"));
    } else {
      this.setState({
        alert: true,
        status: "모든 항목을 입력해주세요."
      });
    }
  }

  public emailChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const updatingEmail: string = event.target.value;
    this.setState({ mail: updatingEmail });
  }

  public nameChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const updatingName: string = event.target.value;
    this.setState({ username: updatingName });
  }

  public passwordOneChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const updatingPasswordOne: string = event.target.value;
    this.setState({ password1: updatingPasswordOne });
  }

  public passwordTwoChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const updatingPasswordTwo: string = event.target.value;
    this.setState({ password2: updatingPasswordTwo });
  }

  public render(): ReactElement {
    const socialLogin: ReactElement[] = providers.map((provider, i) => {
      return <OAuthButton key={i} provider={provider} socket={socket} />;
    });
    const required: ReactElement = this.state.alert ? (
      <span className="uk-alert-primary" uk-alert>
        {/* <a className="uk-alert-close" uk-close></a> */}
        <p style={{ color: "#blue" }}>{this.state.status}</p>
      </span>
    ) : (
      <div></div>
    );

    return (
      <div className="signup">
        <form>
          <div>
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: user"></span>
              <input
                className="uk-input"
                type="text"
                placeholder="필명을 입력해주세요"
                onChange={this.nameChange}
              />
            </div>
          </div>

          <div>
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: mail"></span>
              <input
                className="uk-input"
                type="text"
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
                onChange={this.passwordOneChange}
              />
            </div>
          </div>

          <div>
            <div className="uk-inline">
              <span className="uk-form-icon" uk-icon="icon: lock"></span>
              <input
                className="uk-input"
                type="password"
                placeholder="비밀번호를 확인해주세요"
                onChange={this.passwordTwoChange}
              />
            </div>
          </div>
          <p uk-margin="true">
            <button
              className="uk-button uk-button-small"
              style={{ color: "gray", marginTop: "-10px" }}
              onClick={this.handleSubmit}
            >
              SIGN UP
            </button>
          </p>
          <div>{socialLogin}</div>
        </form>
        <div className="signup_alert">{required}</div>
      </div>
    );
  }
}

export default SignUp;

/*
import React, { ReactElement } from "react";
import Slider from "./RecoReviewSlider/index";
import RecoReviewList from "./RecoReviewList";
import RecoCollectionList from "./RecoCollectionList";

interface IAuthor {
  id: string;
  image: string;
  name: string;
  profile: string;
}

interface IReview {
  id: string;
  author: IAuthor;
  contents: string;
  likes: string[];
  published: boolean;
  thumbnail: string;
  title: string;
}

interface ICollection {
  id: string;
  author: IAuthor;
  content: string;
  likes: string[];
  published: boolean;
  title: string;
}

interface IState {
  selectedCollection: number;
  selectedReview: number;
}


class Main extends React.Component {
  public state: IState = {
    selectedCollection: 0,
    selectedReview: 1
  };

  public fReviews: IReview[] = [
    {
      author: {
        id: "user-id2",
        image: "https://i-love-png.com/images/profile-417-1163876.png",
        name: "정혜경",
        profile: "저는 정혜경이라고 합니다."
      },
      contents:
        "<p>혜경님의 서평이 여기에 들어갈거에요. 혜경님은 어떤 책으로 서평을 쓰실까. 코드를 쳐야하는데 코드보다 가짜 데이터 만드는게 더 오래 걸리는 기분이네요. 이정도면 충분히 길겠죠. 충분히 길어야 자르는것도 연습할텐데.</p>",
      id: "11",
      likes: ["user-id1", "user-id2"],
      published: true,
      thumbnail:
        "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      title: "혜경님"
    },
    {
      author: {
        id: "user-id3",
        image: "https://i-love-png.com/images/profile-417-1163876.png",
        name: "정승권",
        profile: "저는 정승권이라고 합니다."
      },
      contents:
        "<p>승권님의 서평은 여기. 여기는 위보다 조금 더 짧게 쓸거에요. 지금은 너무 짧을까요.</p>",
      id: "12",
      likes: ["user-id1", "user-id2"],
      published: true,
      thumbnail:
        "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      title: "승권님 테스트 일이삼사오"
    },
    {
      author: {
        id: "user-id1",
        image: "https://i-love-png.com/images/profile-417-1163876.png",
        name: "박종우",
        profile: "저는 박종우라고 합니다."
      },
      contents:
        "<p>길이가 좀 더 긴 서평 길이가 긴 서평 길이가 길어서 유사시엔 잘라버려야하는 서평 얼만큼 길어야 하는지 확인해야하는 서평 서평 서평 긴 서평 긴 서평 길이가 좀 더 긴 서평 길이가 긴 서평 길이가 길어서 유사시엔 잘라버려야하는 서평 얼만큼 길어야 하는지 확인해야하는 서평 서평 서평 긴 서평 긴 서평 </p>",
      id: "13",
      likes: ["user-id1", "user-id2"],
      published: true,
      thumbnail:
        "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      title: "이렇게 이렇게 해서"
    },
    {
      author: {
        id: "user-id4",
        image: "https://i-love-png.com/images/profile-417-1163876.png",
        name: "심경주",
        profile: "저는 심경주라고 합니다."
      },
      contents: "<p>난 제일 짧게</p>",
      id: "14",
      likes: ["user-id1", "user-id2"],
      published: true,
      thumbnail:
        "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
      title: "짧은 제목"
    }
  ];

  public fCollections: ICollection[] = [
    {
      author: {
        id: "user-id1",
        image: "https://i-love-png.com/images/profile-417-1163876.png",
        name: "박종우",
        profile: "저는 박종우라고 합니다."
      },
      content: "이 컬렉션은...",
      id: "111",
      likes: ["user-id2", "user-id3"],
      published: true,
      title: "봄볕 쐬며"
    },
    {
      author: {
        id: "user-id2",
        image: "https://i-love-png.com/images/profile-417-1163876.png",
        name: "정혜경",
        profile: "저는 정혜경이라고 합니다."
      },
      content: "이 컬렉션은...",
      id: "112",
      likes: ["user-id1", "user-id3"],
      published: false,
      title: "여름바람 쐬며 읽기 좋은 책"
    },
    {
      author: {
        id: "user-id3",
        image: "https://i-love-png.com/images/profile-417-1163876.png",
        name: "정승권",
        profile: "저는 정승권이라고 합니다."
      },
      content: "이 컬렉션은...",
      id: "113",
      likes: ["user-id1", "user-id4"],
      published: false,
      title: "가을볕 쐬며 읽기 좋은 책 가을바람도 추가함 컬렉션 제목 길게"
    },
    {
      author: {
        id: "user-id4",
        image: "https://i-love-png.com/images/profile-417-1163876.png",
        name: "심경주",
        profile: "저는 심경주라고 합니다."
      },
      content: "이 컬렉션은...",
      id: "114",
      likes: ["user-id1", "user-id2"],
      published: false,
      title: "겨울에 읽기 좋은"
    }
  ];

  public render(): ReactElement {
    return (
      <div className="main">
        <Slider review={this.fReviews[0]} />
        <RecoReviewList reviews={this.fReviews} />
        <div className="main_recocollection_title">
          서로모임에 오신 분들께서 작성해주신 컬렉션입니다.
        </div>
        <RecoCollectionList collections={this.fCollections} />
      </div>
    );
  }
}

// 사이드바 div 가장 상단에 넣을 것

export default Main;


*/
