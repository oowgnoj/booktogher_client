import React, { ReactElement } from "react";
import { connect } from "react-redux";
import { requestUserInfo } from "../../Redux/modules/user";
import { Redirect, Route, RouteComponentProps, Link } from "react-router-dom";
import BooksList from "./BooksList";
import { IAuthor, ICuration, IReview } from "../shared/Types";
import { string } from "prop-types";
import {
  fetchCuration,
  fetchBooks,
  fetchReviews,
  fetchDelete
} from "./fetchReadCuration";
import { fetchBookReviewList } from "../readReview/fetchReview";
import "./index.css";

interface IBook {
  _id: string;
  authors: string[];
  contents: string;
  thumbnail: string;
  title: string;
}

interface IState {
  curation: ICuration;
  books: IBook[];
  reviews: IReview[];
  isDeleted: boolean;
}

type IMatchParams = {
  id: string;
};

type IParams = RouteComponentProps<IMatchParams> & {
  userId: string;
};

class ReadCuration extends React.Component<IParams, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      curation: {
        _id: "",
        author: { _id: "", image: "", name: "", profile: "" },
        contents: "",
        likes: [],
        title: ""
      },
      books: [
        { _id: "", authors: [""], contents: "", thumbnail: "", title: "" }
      ],
      reviews: [],
      isDeleted: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleLikes = this.handleLikes.bind(this);
  }

  public componentDidMount(): void {
    const getCurationInfo = (result: ICuration): void => {
      this.setState({ curation: result });
    };
    const getBookInfo = (result: IBook[]): void => {
      this.setState({ books: result });
    };
    const getReviewInfo = (result: IReview[]): void => {
      this.setState({ reviews: result });
    };
    console.log("this.props.match.params.id : ", this.props.match.params.id);
    fetchCuration(getCurationInfo, this.props.match.params.id);
    fetchBooks(getBookInfo, this.props.match.params.id);
    fetchReviews(getReviewInfo, this.props.match.params.id);
  }

  public handleDelete(): void {
    const deleted = (): void => {
      this.setState({ isDeleted: true });
    };
    fetchDelete(deleted, this.props.match.params.id);
  }

  public handleLikes(): void {
    // 만약 state 의 likes 에 로그인한 유저의 likes 아이디가 포함되어 있다면
    // delete 요청을 보내고 하트 비우기, 내가 state likes 에서 아이디 지우기
    // 아이디가 없다면 Post 요청을 보내고 내가 스태이트 likes 에 아이디 채워넣고 하트 채우기
    // 하트 채우기 : 그냥 store 로 부터 유저 아이디 받아와서 그 유저정보가 배열에 있다면 채우고 아니면 비우기
  }

  public render(): ReactElement {
    // 공용 스테이트랑 연결해서 유저 아이디 받아와서 좋아요 비교하기
    const { curation, books, reviews } = this.state;
    return (
      <div className="readCuration">
        {console.log(this.props)};
        {this.state.isDeleted ? <Redirect to="/" /> : null}
        <div
          className="readCuration_header_likes"
          style={{
            marginLeft: "130px",
            marginTop: "54px",
            float: "left",
            clear: "right"
          }}
        >
          {curation.likes.includes(this.props.userId) ? (
            <span
              uk-icon="icon: heart; ratio: 1.3"
              onClick={this.handleLikes}
              style={{ fill: "red" }}
            ></span>
          ) : (
            <span
              uk-icon="icon: heart; ratio: 1.3"
              onClick={this.handleLikes}
            ></span>
          )}
          <span
            uk-icon="icon: heart; ratio: 1.3"
            onClick={this.handleLikes}
          ></span>
          <span style={{ marginLeft: "13px", fontSize: "20px" }}>
            {curation.likes ? curation.likes.length : "좋아요 수"}
          </span>
        </div>
        <div className="readCuration_header">
          <div
            className="readCuration_header_title"
            style={{
              marginTop: "39px",
              marginLeft: "1px",
              height: "150px",
              width: "100%",
              fontSize: "50px"
            }}
          >
            {curation.title ? curation.title : "큐레이션 제목"}
          </div>
          <div className="readCuration_header_user" style={{ float: "right" }}>
            <div className="readCuration_header_user_image">
              <img
                src={
                  curation.author.image
                    ? curation.author.image
                    : "https://icons-for-free.com/iconfiles/png/128/anonymous+app+contacts+open+line+profile+user+icon-1320183042822068474.png"
                }
                alt={curation.author.name}
              />
            </div>
            <p className="readCuration_header_user_name">
              by {curation.author.name}
            </p>
            <span className="readCuration_header_modify">
              <Link to={`/editcuration/${this.props.match.params.id}`}>
                <button
                  className="uk-button uk-button-text"
                  style={{ marginRight: "30px" }}
                >
                  수정
                </button>
              </Link>
            </span>
            <span className="readCuration_header_delete">
              <button
                className="uk-button uk-button-text"
                onClick={this.handleDelete}
              >
                삭제
              </button>
            </span>
          </div>
        </div>
        <div
          className="readCuration_contents"
          style={{
            marginLeft: "1px",
            height: "300px",
            width: "100%",
            fontSize: "20px"
          }}
        >
          {curation.contents ? curation.contents : "큐레이션 본문"}
        </div>
        <BooksList books={books} />
        <div className="readCuration_reviewlist">
          <div className="readCuration_reviewentry">
            <div className="readCuration_reviewentry_userimage"></div>
            <div className="readCuration_reviewentry_username"></div>
            <div className="readCuration_reviewentry_title"></div>
            <div className="readCuration_reviewentry_content"></div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any): any {
  return {
    userId: state.user.User._id
  };
}

export default connect(mapStateToProps, null)(ReadCuration);